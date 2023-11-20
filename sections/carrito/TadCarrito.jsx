import Carrito from "./Carrito";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Factura from "../factura/Factura";

const Stak = createNativeStackNavigator()

export default function TabCarrito() {
    return (
        <Stak.Navigator>
            <Stak.Screen
                name='Productos'
                component={Carrito}
                options={
                    {

                    
                        headerTitleAlign: "center",


                    }
                }
            />
            <Stak.Screen
                name="Facturar"
                component={Factura}
                options={{
                    headerTitleAlign: "center",

                }}
            />




        </Stak.Navigator>
    )
}