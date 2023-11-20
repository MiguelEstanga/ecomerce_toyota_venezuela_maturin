import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colores } from "../../components/colores";

function Registro() {
    return (
        <View
          style={
            {
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:colores.Textoprimario
            }
          }
        >

            <View
                style={style.container}
            >
                <View style={style.formulario} >
                    <View style={{ gap: 10 }} >
                        <View style={style.items} >
                            <Text>
                                <MaterialIcons name="drive-file-rename-outline" size={24} color="black" />
                            </Text>
                            <Text>
                                Nombre completo
                            </Text>
                        </View>
                        <TextInput
                            style={style.input}
                            placeholder="Mi nombre Completo"
                        />
                    </View>
                </View>
                <View style={style.formulario} >
                    <View style={{ gap: 10 }} >
                        <View style={style.items} >
                            <Text>
                                <MaterialIcons name="drive-file-rename-outline" size={24} color="black" />
                            </Text>
                            <Text>
                                Apellido completo
                            </Text>
                        </View>
                        <TextInput
                            style={style.input}
                            placeholder="Mi nombre Completo"
                        />
                    </View>
                </View>
                <View style={style.formulario} >
                    <View style={{ gap: 10 }} >
                        <View style={style.items} >
                            <Text>
                                <AntDesign name="idcard" size={24} color="black" />
                            </Text>
                            <Text>
                                cedula
                            </Text>
                        </View>
                        <TextInput
                            style={style.input}
                            placeholder="Mi nombre Completo"
                        />
                    </View>
                </View>
                <View style={style.formulario} >
                    <View style={{ gap: 10 }} >
                        <View style={style.items} >
                            <Text>
                                <MaterialCommunityIcons name="city-variant-outline" size={24} color="black" />                        </Text>
                            <Text>
                                ciudad
                            </Text>
                        </View>
                        <TextInput
                            style={style.input}
                            placeholder="Mi nombre Completo"
                        />
                    </View>
                </View>
                <View style={style.formulario} >
                    <View style={{ gap: 10 }} >
                        <View style={style.items} >
                            <Text>
                                <MaterialCommunityIcons name="email-edit-outline" size={24} color="black" />
                            </Text>
                            <Text>
                                correo
                            </Text>
                        </View>
                        <TextInput
                            style={style.input}
                            placeholder="Mi nombre Completo"
                        />
                    </View>
                </View>
                <View style={style.formulario} >
                    <View style={{ gap: 10 }} >
                        <View style={style.items} >
                            <Text>
                                <MaterialCommunityIcons name="onepassword" size={24} color="black" />
                            </Text>
                            <Text>
                                Contraceña
                            </Text>
                        </View>
                        <TextInput
                            style={style.input}
                            placeholder="Mi nombre Completo"
                        />
                    </View>
                </View>
                <TouchableOpacity style={
                    style.btn
                } >
                    <Text style={{
                        color: colores.Textoprimario,
                        fontSize: 18
                    }} >
                        Registrarce
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const style = StyleSheet.create({
    items: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    btn: {
        backgroundColor: colores.segungario,
        width: 300,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        height: 40
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10
    },
    formulario: {
        marginBottom: 20
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        backgroundColor: colores.Textoprimario,
        width: "95%",
        padding: 10,
        borderRadius: 5,

        // Para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // Para Android
        elevation: 5,
    }
})
export default Registro;