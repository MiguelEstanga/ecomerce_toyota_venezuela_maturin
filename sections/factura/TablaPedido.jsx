import { View ,  Text , StyleSheet } from "react-native";

export function TablaPedido({color , data}){
    return(
        <View  style={{
           flexDirection:"row",
           backgroundColor:color ,
           marginTop:10,
            justifyContent:"center"    
        }} >
            <Text style={{textAlign:'center' , width:"50%"}} >
                {data.nombre} X {data.cantidad}
            </Text>

            <Text  style={{width:"50%" , textAlign:"center"}} >
                {data.precio} BS
            </Text>
            
        </View>
    )
}

