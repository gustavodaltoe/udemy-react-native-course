import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export const Entrada = props =>
    <View>
        <TextInput value={props.texto}
            style={Padrao.input}
            onChangeText={props.chamarQuandoMudar} />
    </View>

export default class TextoSincronizado extends Component {

    state = {
        texto: ''
    }

    alterarText = texto => {
        //this.setState({ texto: texto })
        this.setState({ texto }) // Forma reduzida devido ao nome do param ser igual ao obj
    }

    render() {
        return (
            <View>
                <Text style={Padrao.font40}>{this.state.texto}</Text>
                <Entrada texto={this.state.texto}
                    chamarQuandoMudar={this.alterarText} />
            </View>
        )
    }
}