import { View , Text , StyleSheet , Image}  from "react-native";

export default function MenuHeader()
{
    return (
        <View style={style.container} >
            <View>
                <Image
                    style={{
                        width:50,
                        height:50,
                        borderRadius:100
                    }}
                    source={{uri: 'data:image/png;base64,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' }}
                />
            </View>
            <Text style={{
                fontSize:20,
                fontWeight:'900'
            }} >
                Repuestos Toyota
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#ECF0F1',
        width:300,
        height:100,
        borderRadius:10,
        justifyContent:'center',
        alignItems:"center",
        flexDirection:"row",
        gap:20
    }
})