import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Avatar from "./Avatar";
import { colores } from "../../components/colores";
export default function Perfil() {
    return (
        <>
            <View style={style.perfil} >
                <Avatar />

            </View>
            <ScrollView  >
                <View style={style.info} >
                    <View style={style.data}>
                        <Text style={style.text} >
                            correo
                        </Text>
                        <Text style={style.text_info} >
                            miguelestanga12@gmail.com
                        </Text>
                    </View  >
                    <View style={style.data}>
                        <Text style={style.text} >
                            Nombres
                        </Text>
                        <Text style={style.text_info} >
                            Miguel Alejandro
                        </Text>
                    </View  >
                    <View style={style.data}>
                        <Text style={style.text} >
                            Apellidos
                        </Text>
                        <Text style={style.text_info} >
                            Estanga Martinez
                        </Text>
                    </View  >
                    <View style={style.data}>
                        <Text style={style.text} >
                            Cedula
                        </Text>
                        <Text style={style.text_info} >
                            26101877
                        </Text>
                    </View  >
                    <View style={style.data}>
                        <Text style={style.text} >
                             compras
                        </Text>
                        <Text style={style.text_info} >
                            0
                        </Text>
                    </View  >
                    <View style={style.data}>
                        <Text style={style.text} >
                             Ciudad
                        </Text>
                        <Text style={style.text_info} >
                            Maturin
                        </Text>
                    </View  >
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: "center", marginTop: 10, marginBottom: 10 }} >
                        <Text style={{ fontSize: 30, fontWeight: '300' }}>
                            Historial de compra
                        </Text>
                    </View>

                </View >
            </ScrollView>


        </>

    )
}

const style = StyleSheet.create({
    historial: {
        borderWidth: 1,
        height: 210,
        backgroundColor: "#f2f2f2"
    },
    perfil: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: '25%',
        backgroundColor: '#979A9A'
    },
    info: {
        width: "100%",
        padding: 10,
    },
    data: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 5,
        
    },
    text: {
        textAlign: "left",
        width: 100,
        fontSize: 17,
        fontWeight: '400'
    },
    text_info: {
        textAlign: 'left',

        width: '60%',
    }
})