
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InicioMain from './sections/InicioSeccion/InicioMain';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProductoContext } from './context/ProductoContext';
import { ProgressBarAndroidBase, Text, View } from 'react-native';
import Carrito from './sections/carrito/Carrito';
import { FontAwesome } from '@expo/vector-icons';
import Perfil from './sections/Perfil/Perfil';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CarritoContext, { CarritoContexto } from './context/CarritoContext';
import { colores } from './components/colores';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabCarrito from './sections/carrito/TadCarrito';
import { AntDesign } from '@expo/vector-icons';
import Menu from './sections/Menu/Menu';
import { Login } from './context/Login';
import MenuHeader from './components/MenuHeader';
import TabMenuNavegacion from './sections/Menu/TabMenuNavegacion';


const Tab = createBottomTabNavigator();
function Navegacion() {
  const { carrito } = useContext(CarritoContexto)

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          component={InicioMain}
          name='Inicio'
          options={
            {


              tabBarIcon: () => (
                <FontAwesome name="home" size={24} color={colores.segungario} />
              ),
              headerTitleAlign: "center",



            }
          }
        />
        <Tab.Screen
          component={TabCarrito}
          name='Carrito'
          options={
            {
              headerShown: false,
              tabBarIcon: () => (
                <View>
                  <FontAwesome name="shopping-cart" size={24} color={colores.segungario} />
                  <Text style={{ position: 'absolute', right: -6, top: -3, backgroundColor: colores.ternario, borderRadius: 50, width: 15, height: 15, textAlign: 'center', textAlignVertical: "center", color: 'white', fontSize: 10 }}>
                    {carrito.length}
                  </Text>
                </View>
              )

            }
          }
        />

      

        <Tab.Screen
          name='MenuNavegacion'
          component={TabMenuNavegacion}
          options={
            {
              tabBarIcon: () => (
                <AntDesign name="menu-fold" size={24} color="black" />
              ),
            
                
              headerShown:false,
            }
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <ProductoContext>
      <Login>
        <CarritoContext>
          <Navegacion />
        </CarritoContext>
      </Login>
    </ProductoContext>
  );
}


