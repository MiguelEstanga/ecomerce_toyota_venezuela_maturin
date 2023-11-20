import React, { useContext, useEffect, useState } from "react";
import { View, Modal, Text, StyleSheet, TouchableHighlight, Image } from "react-native";
import { Producto } from "../context/ProductoContext";
import BtnEliminar from "./BtnCancelar";
import { CartaProducto } from "./CartaProducto";
import { colores } from "./colores";
import { CarritoContexto } from "../context/CarritoContext";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import Contador from "./Contador";

export default function Show({ modal }) {
    const { show_producto, AbrirProducto, setAbrirProducto } = useContext(Producto);
    const { agragar_carrito, suma } = useContext(CarritoContexto)

    const [contador, setContador] = useState(1)

    useState(() => {

    }, [contador, suma])


    const handle_agregar_carrito = () => {
        const compra = {
            ...show_producto
        }

        compra.precio = compra.precio * contador,
        compra.cantidad = contador


        agragar_carrito(compra)

        setAbrirProducto(false)
        // navegacion.navigate('Carrito')
        console.log(compra)
    }
    
    return (
        <Modal
            style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#D4E6F1" }}
            visible={AbrirProducto}
            transparent={true}
        >


            <View style={style.contenedor_modal} >
                <View style={style.contenimagen} >
                    <Image
                        source={{ uri: show_producto.imagen }}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>

                <View style={style.contenData} >
                    <View style={style.cantidad} >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '300'
                        }} >
                            {show_producto.nombre}
                        </Text>
                        <Contador
                            contador={contador}
                            setContador={setContador}
                        />
                    </View>
                    <View style={style.descripcion} >
                        <Text style={{ fontSize: 20, fontWeight: '500' }} >
                            Descripcion
                        </Text>
                        <Text style={{ fontWeight: '300', fontSize: 17 }} >
                            {show_producto.descripcion}
                        </Text>
                    </View>
                    <View style={{

                        width: '100%',
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 10
                    }} >
                        <Text style={{ fontSize: 20, fontWeight: '500' }} >
                            Stop
                        </Text>
                        <Text style={{ fontWeight: '300', fontSize: 17 }} >
                            {show_producto.stop}
                        </Text>
                    </View>
                    <View style={style.contenPrecio} >
                        <Text style={{ fontSize: 20, fontWeight: '400' }}>
                            {show_producto.precio * contador}BS
                        </Text>

                        <Text
                            onPress={() => handle_agregar_carrito()}
                            style={style.btnPay}
                        >
                            <AntDesign name="shoppingcart" size={20} color={colores.Textoprimario} />
                            Agregar al carrito
                            
                        </Text>

                    </View>
                    <View style={{
                        marginTop:30
                    }} >  
                        <BtnEliminar
                            handleEvento={setAbrirProducto}
                            estado={AbrirProducto}
                        />
                    </View>

                </View>
            </View>

        </Modal>
    )
}


const style = StyleSheet.create({
    btnPay: {
        width: '80%',
        height: 40,
        backgroundColor: colores.segungario,
        color: colores.Textoprimario,
        fontSize: 15,
        textAlign: "center",
        textAlignVertical: 'center',
        fontWeight: '300',
        borderRadius: 5
    },
    contenPrecio: {

        width: "90%",
        height: 40,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        gap: 10
    },
    descripcion: {

        width: '100%',
        marginTop: 10,


        padding: 10
    },
    cantidad: {


        width: '90%',
        height: 30,
        marginTop: 30,
        fontSize: 20,
        fontWeight: 300,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    acciones: {

        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderBlockColor: "black",
        width: "80%",
        height: 40,
        padding: 10
    },

    contenedor_modal: {
        backgroundColor: "#EBEDEF",
        alignItems: "center",
        width: "100%",
        height: "100%",

    },
    contenimagen: {

        width: '100%',
        height: '60%'
    },
    contenData: {
        position: "absolute",
        bottom: 0,

        alignItems: "center",
        height: "45%",
        width: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colores.Textoprimario
    }
})