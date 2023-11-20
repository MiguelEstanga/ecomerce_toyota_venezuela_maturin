import { SafeAreaView, View, Image, StyleSheet, Text, ScrollView, useWindowDimensions } from "react-native";
import { colores } from "./colores";
import { Producto } from "../context/ProductoContext";
import productos from "../sections/InicioSeccion/json/productos";

export default function Carrucel() {
    const { width } = useWindowDimensions()
    const size = width * 0.5
    return (

        <SafeAreaView style={style.container} >
            <Text
                    style={
                        {
                            textAlign:"center",
                            fontSize:40
                        }
                    }
                >
                    Mas Vendidos
                </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={19}

            >
                
                {productos.map((p,index)=> (

                    <View  key={index} style={{ width: size, marginRight: 20 }} >
                        <Image
                            style={{ width: "100%", height: "100%", borderRadius: 10 }}
                            source={{ uri: p.imagen }}
                        />
                        <Text style={style.btn} >
                            Comprar Ahora
                        </Text>
                        <Text style={style.precio} >
                            {p.precio}BS
                        </Text>
                    </View>
                ))}


            </ScrollView>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 10,
        width: "90%",
        height: 330,
        position: "relative",
        marginBottom:30
    },

    btn: {

        width: 120,
        height: 40,
        position: "absolute",
        bottom: 5,
        right: 5,
        backgroundColor: colores.primario,
        color: colores.Textoprimario,
        textAlign: "center",
        textAlignVertical: "center"
    },
    precio: {

        width: 70,
        height: 40,
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: colores.ternario,
        color: colores.Textoprimario,
        textAlign: "center",
        textAlignVertical: "center"
    }

})