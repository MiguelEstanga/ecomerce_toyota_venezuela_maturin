import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
export default function BtnEliminar(
    {
        handleEvento,
        estado
    }
) {
    function handelPresionar() {
        console.log("cancelar ")
        console.log(estado)
        handleEvento(!estado)
    }
    return (
        <View style={style.contenedor} >
            <Text
                onPress={() => handelPresionar(!estado)}
                style={{ color: "#FDFEFE", width: "100%", height: "100%", textAlign: "center", textAlignVertical: "center" }}>
                Cancelar
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    contenedor: {
        width: 120,
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        borderRadius: 4,
        backgroundColor: "#C0392B"
    }
})