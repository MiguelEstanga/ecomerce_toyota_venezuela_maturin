import React , { useContext, useEffect } from "react";
import { View,  Text, ScrollView } from "react-native";
import { CarritoContexto } from "../../context/CarritoContext";
import ProductoCarrito from "./CarritoProducto/ProductosCarrito";
import { Total } from "./Total";

export default function Carrito()
{
    const {carrito , eliminarDelCarrito } = useContext(CarritoContexto)
    useEffect(()=>{} , [carrito])
    return(
        <ScrollView>
           <View style={{
                justifyContent:"center",
                alignItems:"center"
           }} >
            
            {
                carrito.length == 0 ?  <Text
                    style={{
                        fontSize:20,
                        fontWeight:'300',
                        marginTop:20
                    }}
                > No hay productos en el carrito</Text> : ""
            }
            {
                carrito.map((producto , index) => (
                   <ProductoCarrito
                        key={index}
                        data={producto}

                   /> 
                ))
            }
              <Total/>
           </View>
        </ScrollView>
    )
}