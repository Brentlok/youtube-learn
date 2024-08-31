import { Button, Check, Typography } from 'lib/components'
import { useTranslations } from 'lib/locale'
import { useStore } from 'lib/store'
import { StyleSheet } from 'lib/styles'
import React, { useState } from 'react'
import { Dimensions, Modal, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SortType } from './type'

export const Sort: React.FunctionComponent = () => {
    const T = useTranslations()
    const { sortBy, setSortBy } = useStore()
    const [openModal, setOpenModal] = useState(false)
    const insets = useSafeAreaInsets()
    const [sortType, setSortType] = useState(sortBy)

    const handleConfirm = () => {
        setSortBy(sortType)
        setOpenModal(false)
    }

    const handleClose = () => {
        setSortType(sortBy)
        setOpenModal(false)
    }

    return (
        <React.Fragment>
            <TouchableOpacity style={styles.sort} onPress={() => setOpenModal(true)}>
                <Typography.SortTitle>
                    {T.sort.sortBy} <Typography.SortTitle style={{ fontFamily: 'PoppinsSemiBold' }}>{T.sort[sortBy]}</Typography.SortTitle>
                </Typography.SortTitle>
            </TouchableOpacity>
            <Modal
                transparent
                visible={openModal}
                onRequestClose={handleClose}
                statusBarTranslucent
            >
                <TouchableOpacity style={styles.modalBackground(insets.bottom)} onPress={handleClose}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modal}>
                            <Typography.SortModalTitle>
                                {T.sort.modalTitle}
                            </Typography.SortModalTitle>
                            <View style={styles.sortTypes}>
                                {Object.values(SortType).map(type => (
                                    <View key={type} style={styles.sortType}>
                                        <Check
                                            checked={sortType === type}
                                            onPress={() => setSortType(type)}
                                        />
                                        <Typography.SortModalType>
                                            {T.sort[type]}
                                        </Typography.SortModalType>
                                    </View>
                                ))}
                            </View>
                            <View style={styles.confirm}>
                                <Button onPress={handleConfirm}>
                                    {T.sort.confirm}
                                </Button>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>
        </React.Fragment>
    )
}

const styles = StyleSheet.create(theme => ({
    sort: {
        marginBottom: theme.gap(1.5),
    },
    modalBackground: (inset: number) => ({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.hexToRgba(theme.colors.black, 0.8),
        maxHeight: Dimensions.get('window').height - (72 + inset / 2),
        paddingHorizontal: 36,
    }),
    modal: {
        height: 400,
        backgroundColor: theme.colors.steel,
        borderRadius: theme.gap(3),
        width: '100%',
        paddingVertical: theme.gap(3),
        paddingHorizontal: theme.gap(2),
    },
    sortTypes: {
        marginTop: theme.gap(3),
        gap: theme.gap(3),
    },
    sortType: {
        flexDirection: 'row',
        gap: theme.gap(3),
        alignItems: 'center',
    },
    confirm: {
        paddingHorizontal: theme.gap(1),
        marginTop: 'auto',
    },
}))
