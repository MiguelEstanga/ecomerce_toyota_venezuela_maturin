import { Text, View, StyleSheet, Button } from "react-native";
import { colores } from "../../components/colores"
import { cloneElement, useContext, useEffect, useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import {CarritoContexto }from "../../context/CarritoContext";
import productos from "../InicioSeccion/json/productos";
import { useNavigation } from "@react-navigation/native";
export function Total() {
    const [total, setTotal] = useState(200)
    const {carrito, suma} = useContext(CarritoContexto)
    const navegacion = useNavigation()
    useEffect(()=>{
        const total_pago = carrito.reduce((acumulador, producto) => acumulador + (producto.precio ), 0);        
        setTotal(total_pago)
    }, [carrito , suma])
    return (
        <View style={style.container}>
            <Text style={{
                fontSize: 30,
                fontWeight: '600'
            }} >
                Resumen del pedido
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={style.leyenda} >
                    Cantidad de producto
                </Text>
                <Text style={style.leyenda2} >
                    {carrito.length}
                </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={style.leyenda} >
                    Total a pagar
                </Text>
                <Text style={style.leyenda2} >
                    {total}
                </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center" }} >

                <Text>

                </Text>
                <Button
                    buttonStyle={{ width: 100 , height:200 }} // Ajusta el ancho del botón aquí

                    title="Ir al pago"
                    icon={<FontAwesome5 name="money-check-alt" size={17} color={colores.Textoprimario} />
                    }
                    onPress={() => navegacion.navigate('Facturar')  }
                />


            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "90%",
        height: 170,
        borderTopWidth: 1,
        paddingTop: 10,
        backgroundColor: "#f2f2f2f2"
    },
    leyenda: {
        color: colores.segungario,
        fontSize: 14,
        textAlignVertical: 'center',
        textAlign: 'left',

        width: '50%',
        marginTop: 10
    },
    leyenda2: {
        color: colores.segungario,
        fontSize: 14,
        textAlignVertical: 'center',
        textAlign: 'right',

        width: '50%',
        marginTop: 10
    }
    ,
    btnFacturar: {

        height: 50,
        width: '100%',
        textAlign: 'center',
        textAlignVertical: "center",
        fontSize: 20,
        color: colores.Textoprimario,
        backgroundColor: colores.segungario,
        borderRadius: 5
    }
})