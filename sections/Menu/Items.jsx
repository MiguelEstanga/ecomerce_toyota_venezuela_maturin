import { TouchableOpacity ,View , Text  , StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { colores } from "../../components/colores";
import { useNavigation } from "@react-navigation/native";
export function Items(
    {
        nombre,
        icono,
        url
    }
) {
    const Navegacion = useNavigation()

    return (
        <TouchableOpacity
        onPress={ () => Navegacion.navigate(url)  }
        style={style.items} >
            <View style={ 
                { 
                    flexDirection: "row", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    gap: 20 
                    
                    }} >
                <Text>
                {icono}
                  
                </Text>
                <Text style={style.textItems} >
                    {nombre}
                </Text>
            </View>

            <Text>
                 <Ionicons name="ios-arrow-redo" size={24} color={colores.primario} />
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    items: {
        backgroundColor:colores.Textoprimario ,
        height: 70,
        width:"90%",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        justifyContent: "space-around",
        marginBottom:1,
        borderRadius:10,
        marginTop:10
    },
    textItems: {
        fontSize: 20,
        fontWeight: '300'
    },
})