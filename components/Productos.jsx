import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Producto } from "../context/ProductoContext";
import Show from "./Show";
import { colores } from "./colores";
import { AntDesign } from '@expo/vector-icons';


export function Productos({
    data
}) {

    const { setShowProducto, setAbrirProducto } = useContext(Producto)
    const [modal, setModal] = useState(false)
    const [contador, setContador] = useState(1)
    useEffect(() => { }, [modal, setShowProducto])
    return (

        <TouchableOpacity
            onPress={() => {
                setShowProducto({ ...data })
                setAbrirProducto(true)
            }}
            style={style.container} >
            <Show

            />

            <View style={style.ImagenProducto} >
                <Image
                    source={{ uri: data.imagen }}
                    style={{ width: "100%", height: "100%" }}
                />
            </View>
            <View style={style.info} >
                <Text style={style.Text} >
                    {data.nombre}
                </Text>


            </View>

            <View style={style.pay} >
                <Text style={{ fontSize: 15, color: colores.segungario }} >
                    {data.precio} BS
                </Text>


            </View>

        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "#FDFEFE",
        width: "45%",
       

        height: 220,

    },
    ImagenProducto: {

        width: '100%',
        height: "50%",
        flex: 1,

    },
    info: {

        width: '100%',
        padding: 10,
        backgroundColor: "#FDFEFE"
    },
    Text: {
        fontWeight: "900",
        color: "#273746",

        textAlign: "center"
    },
    pay: {


        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        padding: 10

    }
})