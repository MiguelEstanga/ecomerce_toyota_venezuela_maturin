import { ScrollView, Text, View } from "react-native";

function Mision() {
    return (
        <ScrollView>
            <View style={{
                alignItems: "center"
            }} >
                <Text
                    style={{
                        textAlign: "justify",
                        fontSize: 16,
                        padding: 10,
                        lineHeight: 30,
                        fontWeight: '300'
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos praesentium quis ullam molestias iusto, quaerat debitis illum reiciendis doloribus, dolorum tempora voluptate iste, et nam laudantium incidunt corrupti aperiam exercitationem?

                </Text>
            </View>
        </ScrollView>);
}

export default Mision;