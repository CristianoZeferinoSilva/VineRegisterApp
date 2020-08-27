import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import ScanPage from '../pages/ScanPage';
import VineForm from '../pages/VineForm';
import ExistingProduct from '../pages/ExistingProduct';
import CameraComponent from '../components/camera'
import VineTabs from './VineTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='Landing' component={Landing} />
                <Screen name='ScanPage' component={ScanPage} />
                <Screen name='VineForm' component={VineForm} />
                <Screen name='ExistingProduct' component={ExistingProduct} />
                <Screen name='CameraComponent' component={CameraComponent} />
                <Screen name='Vine' component={VineTabs} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;