import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Modal } from "react-native";
import BeritaUdang from "../Screen/BeritaUdang";
import Detail from "../Screen/Detail";
import HargaUdang from "../Screen/HargaUdang";

import KabarUdang from "../Screen/HargaUdang"
import Penyakit from "../Screen/Penyakit"


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const bottomTab = createBottomTabNavigator();

function Navigation () {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name = 'Jala Media'
                    component = {tabs}
                    options={{
                        headerTintColor: 'white',
                        headerStyle:{
                            backgroundColor: '#1B77DF'
                        }
                    }}
                />
                 <Stack.Screen
                    name = 'KabarUdangScreen'
                    component = {KabarUdang}
                />
                 <Stack.Screen
                    name = 'PenyakitScreen'
                    component = {Penyakit}
                />
                <Stack.Screen
                    name= 'DetailScreen'
                    component = {Detail}
                    options={{
                        headerTintColor: 'white',
                        headerBackTitle: 'Harga Udang',
                        headerTitle: '',
                        headerStyle:{
                            backgroundColor: '#1B77DF',
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function tabs () {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#1B77DF',
                tabBarInactiveTintColor: '#737373',
            }}
        >
            <Tab.Screen
                name = "Harga Udang"
                component={HargaUdang}
            />
             <Tab.Screen
                name = "Kabar Udang"
                component={BeritaUdang}
            />
             <Tab.Screen
                name = "Penyakit"
                component={Penyakit}
            />
        </Tab.Navigator>
    )
}

export default Navigation;