import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import params from '../params'

export default props => {
    const { mined, opened, nearMines } = props

    const styleField = [styles.field]
    if (opened) styleField.push(styles.opened)
    if (styleField.length === 1) styleField.push(styles.regular)

    let color = null
    switch(nearMines) {
        case 0: break
        case 1:
            color = '#2A28D7'
            break
        case 2:
            color = '#2B520F'
            break
        case 3:
        case 4:
        case 5:
            color = '#F9060A'
            break
        default:
            color = '#F221A9'
            break
    }

    return (
        <View style={styleField}>
            {/* Se der falso nao renderiza nada */}
            {(!mined && opened && nearMines > 0) ? 
                <Text style={[styles.label, { color: color }]}>
                    {nearMines}</Text>: false}
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    }
})