import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'Gustavo', nota: 10.0 },
    { id: 2, nome: 'Ana', nota: 9.9 },
    { id: 3, nome: 'Mandy', nota: 5.0 },
    { id: 4, nome: 'Molly', nota: 8.0 },
    { id: 5, nome: 'Billy', nota: 4.0 },
    { id: 6, nome: 'Toddy', nota: 3.0 },
    { id: 7, nome: 'Roberto', nota: 7.0 },
    { id: 8, nome: 'Roseli', nota: 7.0 },
    { id: 9, nome: 'Karina', nota: 8.5 },

    { id: 11, nome: 'Gustavo', nota: 10.0 },
    { id: 12, nome: 'Ana', nota: 9.9 },
    { id: 13, nome: 'Mandy', nota: 5.0 },
    { id: 14, nome: 'Molly', nota: 8.0 },
    { id: 15, nome: 'Billy', nota: 4.0 },
    { id: 16, nome: 'Toddy', nota: 3.0 },
    { id: 17, nome: 'Roberto', nota: 7.0 },
    { id: 18, nome: 'Roseli', nota: 7.0 },
    { id: 19, nome: 'Karina', nota: 8.5 }
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // Flex
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}> Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}