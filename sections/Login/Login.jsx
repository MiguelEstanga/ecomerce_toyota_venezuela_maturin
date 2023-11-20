import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colores } from "../../components/colores";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function Login() {
    const [iconEmail, setIconEmail] = useState(false)
    const [iconPassword, setIconPassword] = useState(false)
    const handle_icon_email = () => setIconEmail(!iconEmail)
    const handle_icon_password = () => setIconPassword(!iconPassword)
    const navegacion = useNavigation()

    return (
        <View style={style.contaienr} >
            <View>
                <Text style={{
                    fontSize: 40,
                    color: colores.primario,
                    fontWeight: "200",

                }} >
                    Iniciar sesion
                </Text>
            </View>
            <View style={style.formulario} >
                <View
                    style={{
                        gap: 2,
                        marginBottom: 20,

                    }}
                >

                    <View
                        style={
                            {
                                bottom: 0,

                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                                position: iconEmail == false ? 'absolute' : 'relative',
                                left: 10,
                                bottom: 8
                            }
                        }
                    >
                        <Text>
                            <MaterialIcons name="email" size={24} color="#B03A2E" />
                        </Text>
                        <Text>
                            Correo
                        </Text>
                    </View>

                    <TextInput
                        style={style.email}
                        onFocus={() => handle_icon_email()}
                    />
                </View>
                <View
                    style={{
                        gap: 2,
                        position: "relative"
                    }}
                >
                    <View style={{
                        bottom: 0,

                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                        position: iconEmail == false ? 'absolute' : 'relative',
                        left: 10,
                        bottom: 8
                    }}>
                        <Text

                        >
                            <MaterialCommunityIcons name="form-textbox-password" size={24} color={colores.primario} />
                        </Text>
                        <Text>
                            Contraseña
                        </Text>
                    </View>
                    <TextInput
                        style={style.email}
                        onFocus={() => handle_icon_password()}
                    />
                </View>
            </View>

            <View style={style.botones} >
                <TouchableOpacity
                    style={style.btn}
                    onPress={() => navegacion.navigate("Registro")}
                >
                    <Text style={style.text}>
                        Registrate
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btn_login} >
                    <Text style={style.text} >
                        Iniciar session
                    </Text>
                </TouchableOpacity>
            </View>

        </View>);
}

const style = StyleSheet.create({
    contaienr: {
        backgroundColor:colores.Textoprimario,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 25
    },
    formulario: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // Para Android
        elevation: 5,
        height: 180,
        padding: 10,
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: colores.Textoprimario,
        gap: 15
    },
    email: {
        borderBottomWidth: 1,
        width: 300,
        height: 30,
        borderRadius: 5,
        paddingLeft: 10
    },
    botones: {

        height: 70,
        width: '100%',
        marginTop: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    btn: {

        width: 150,
        height: 50,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colores.ternario,
    },
    btn_login: {
        width: 150,
        height: 50,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colores.primario,
    },
    text: {
        fontWeight: '300',
        fontSize: 16,
        color: colores.Textoprimario
    },
    icono: {

        bottom: 0,

        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        position: "absolute",
        left: 10,
        bottom: 8
    }
})
export default Login;