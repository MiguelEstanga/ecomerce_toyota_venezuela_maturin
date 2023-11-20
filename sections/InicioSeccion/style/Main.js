import { StyleSheet } from "react-native";

export const StylesInicio = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap:5,
        justifyContent:"center"
        
    },

    Text:{
        fontSize:12,
        fontWeight:"100",
        fontFamily:"Roboto",
        color:"#17202A"

    },
    contenido:{
        borderWidth:1,
        width:"95%",
        
    },
    productoCarta:{
     
        width:"90%",
        borderRadius:10,
        height:500,
        marginBottom:10,
        marginTop:10,
        backgroundColor:"#FDFEFE"
    },
    imagenProducto:{
        borderWidth:1,
        height:"60%",
        borderRadius:10,
        backgroundColor:"black"
    },
    descripcion:{
       
        padding:10,

    }
})