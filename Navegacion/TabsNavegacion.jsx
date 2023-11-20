import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import InicioMain from "../sections/InicioSeccion/InicioMain";

export function TabNavegacion(){

    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Inicio"
                    component={InicioMain}
                />     
            </Tab.Navigator>
        </NavigationContainer>
    )
}