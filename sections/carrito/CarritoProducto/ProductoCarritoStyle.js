import { StyleSheet } from "react-native";

export const styleCarritoProducto = StyleSheet.create({
    container:{
        position:"relative",
        width:"95%",
        height:100,
        backgroundColor:"#FDFEFE",
        borderRadius:10,
        flexDirection:"row",
        marginTop:10
    },
    imagen:{
       
        width:"40%",
        height:"100%"
    },
    data:{
      
        width:"60%",
        height:"100%",
        padding:5
    },
    text:{
        fontWeight:"300",
        fontSize:18
    },
    cantidad:{
        fontSize:15,
        fontWeight:"900",
        marginTop:10
    },
    total:{
        marginTop:5,
       
        fontSize:20
    },
    eliminar:{
        position:"absolute",
        top:9,
        right:0
    }
})