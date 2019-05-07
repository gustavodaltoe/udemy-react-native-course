import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props =>
    <Text style={{ fontSize: 35 }}>
        {props.label}
        {props.ano + 2000}
    </Text>

// Definindo valores default
ValidarProps.defaultProps = {
    label: 'Ano:  '
}

// Obrigar parametro
ValidarProps.propTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps