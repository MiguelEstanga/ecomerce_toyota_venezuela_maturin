import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { colores } from "../../components/colores";
import { Items } from "./Items";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext } from "react";
import { LoginContexto } from "../../context/Login";
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


export default function Menu() {
    const { login } = useContext(LoginContexto)
    return (
        <ScrollView>
            <View style={style.comtainer} >
                <Items
                    nombre={'Vision'}
                    icono={<AntDesign name="linechart" size={24} color="black" />}
                    url={'Vision'}
                />
                <Items
                    url={'Mision'}
                    nombre={'Mision'}
                    icono={<MaterialCommunityIcons name="transmission-tower-export" size={24} color="black" />}
                />
                <Items
                    url={'Perfil'}
                    nombre={'Perfil'}
                    icono={<AntDesign name="profile" size={24} color="black" />}
                />
                {
                    login == false ? (
                        <Items
                            url={'Login'}
                            nombre={'Iniciar Sesion'}
                            icono={<Entypo name="login" size={24} color="black" />}
                        />
                    ) : (
                        <Items
                            nombre={'Cerrar sesion'}
                            icono={<SimpleLineIcons name="logout" size={24} color="black" />
                            }
                        />

                    )
                }






            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    comtainer: {
        alignItems: "center",
    },

    cabecera: {
        backgroundColor: colores.segungario,
        height: 150,
        width: '100%',
        justifyContent: "center",
        alignItems: 'center'
    },
    logo: {
        borderWidth: 1,
        borderRadius: 100,
        width: 80,
        height: 80,
        backgroundColor: "black"
    },
    titulo: {
        color: colores.Textoprimario,
        fontSize: 30
    }
})