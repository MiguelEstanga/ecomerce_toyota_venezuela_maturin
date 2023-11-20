import { View, Text, StyleSheet, ScrollView, TextInput, Button, Image } from "react-native";
import { TablaPedido } from "./TablaPedido";
import { colores } from "../../components/colores";
import { useContext, useState } from "react";
import { Producto } from "../../context/ProductoContext";
import { CarritoContexto } from "../../context/CarritoContext";

function fecha(){
    const fecha = new Date()
    let hora = fecha.getHours()
    let  minutos  = fecha.getMinutes()
    let segundos = fecha.getSeconds()

    let dia = fecha.getDay()
    let mes = fecha.getMonth()
    let ano = fecha.getFullYear()
    return  `${dia}/${mes}/${ano} | ${hora}:${minutos}:${segundos}`
}
export default function Factura() {
    const [texto, setTexto] = useState('')
    const { carrito, Total_carrito_precio } = useContext(CarritoContexto)

    return (
        <ScrollView >
            <View style={{ justifyContent: "center", alignItems: "center" }} >
                <Text style={style.factura_titulo} >
                    Factura
                </Text>
                <View style={style.factura} >
                    {carrito.map((producto, index) => (
                        <TablaPedido
                            key={index}
                            data={producto}
                            color={
                                index%2== 0 ? '#ffffff' : '#D0D3D4'
                            }
                        />

                    ))}

                    <View style={style.fecha} >
                        <Text style={style.text} >
                            Fecha
                        </Text>
                        <Text style={style.text} >
                            {fecha()}
                        </Text>
                    </View>
                    <View style={style.fecha} >
                        <Text style={style.text} >
                            Total
                        </Text>
                        <Text style={style.text} >
                            {Total_carrito_precio()}BS
                        </Text>
                    </View>
                    <Text style={{ marginTop: 20, fontSize: 17, textAlign: "center", fontWeight: '900', color: colores.advertencia }} >
                        Antes de continuar rellene la siguiente informacion
                    </Text>
                </View>
                <View style={{ width: '100%', justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ width: "100%", textAlign: "left", paddingLeft: 20, position: "relative", top: 10 }} >
                        Numero de refrencia Bancaria
                    </Text>
                    <TextInput
                        style={
                            {
                                marginTop: 20,
                                height: 30,
                                borderColor: 'gray',
                                borderWidth: 1,
                                width: "90%",
                                paddingLeft: 20,
                                borderRadius: 5
                            }}
                        onChangeText={texto => setTexto(texto)}
                        value={texto}
                        placeholder="numero de referencia"
                        keyboardType="numeric"
                    />


                </View>
                <View style={{ width: '100%', justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ width: "100%", textAlign: "left", paddingLeft: 20, position: "relative", top: 10 }} >
                        Numero del Banco
                    </Text>
                    <TextInput
                        style={
                            {
                                marginTop: 20,
                                height: 30,
                                borderColor: 'gray',
                                borderWidth: 1,
                                width: "90%",
                                paddingLeft: 20,
                                borderRadius: 5
                            }}
                        onChangeText={texto => setTexto(texto)}
                        value={texto}
                        placeholder="numero de referencia"
                        keyboardType="numeric"
                    />


                </View>
                <View style={{ height: 40, width: "80%", marginTop: 30, justifyContent: "center", alignContent: "center" }} >
                    <Text style={{
                        borderRadius: 5,
                        height: '100%',
                        width: "100%",
                        backgroundColor: colores.segungario,
                        color: colores.Textoprimario,
                        textAlign: "center",
                        textAlignVertical: "center",
                        fontSize: 20
                    }} >
                        Pagar Factura
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {

    },
    factura_titulo: {
        textAlign: 'center',
        fontSize: 50
    },
    factura: {

        width: '90%'
    },
    fecha: {
        flexDirection: "row"
    },
    text: {
        textAlign: "center",
        width: "50%",
        marginTop: 20,
        backgroundColor: colores.primario,
        color: colores.Textoprimario,
        padding: 10
    }
})