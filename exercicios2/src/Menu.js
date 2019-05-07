import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'

export default createDrawerNavigator({
    Contador: {
        screen: () => <Contador numeroInicial={5} />,
        navigationOptions: { title: 'Contador' }
    },
    MegaSena: {
        screen: () => <MegaSena numero={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />,
        navigationOptions: { title: 'Inverter' }
    },
    ParImpar: {
        screen: () => <ParImpar numero={20} />,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!' />
    }
}, { drawerWidth: 300})