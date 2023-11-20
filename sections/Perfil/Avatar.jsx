import { StyleSheet, View , Text , Image } from "react-native";
import { colores } from "../../components/colores";
import React from "react";
export default function Avatar() {
    return (
        <>
           <View  style={style.constainer} >
                <Image
                    style={{
                        width:100,
                        height:100,
                        borderRadius:100
                    }}
                    source={{uri:'https://pm1.aminoapps.com/6104/f02a9eee7037ce6ccd2fdce9e6811e3bb4c2d40e_00.jpg'}}
                />
           </View>
            <Text
                style={
                    {
                        marginTop:10,
                        color:colores.Textoprimario,
                        fontWeight:"200",
                        fontSize:17
                    }
                }
            >
                miguelestanga12@gmail.com
            </Text>

        </>
    )
}


const style = StyleSheet.create({
    constainer: {
      width:100,
      height:100,
      borderRadius:100,
      backgroundColor:"black"

    },
    esfera: {
        backgroundColor: "black",
        width: 150,
        height: 150,
        borderRadius: 100,
        position: "absolute",
        bottom: -30,

        overflow: "visibles"
    },

})