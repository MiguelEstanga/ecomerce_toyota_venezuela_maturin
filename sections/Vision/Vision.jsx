import { View, Text, StyleSheet ,ScrollView } from "react-native";

export function Vision() {
    return (
        <ScrollView>


            <View style={style.contaienr} >
                <Text style={style.text} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illum laborum animi eos eius eaque tempora, officia praesentium unde officiis beatae sed omnis molestiae optio, voluptas quod vero maiores explicabo?
                    Quo, quasi! Similique amet possimus nesciunt placeat, pariatur officia odit minima suscipit culpa consectetur ut ad deleniti asperiores nulla sequi, in vitae ea harum. Quo consequuntur tenetur ullam soluta rerum.
                </Text>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    contaienr: {
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        textAlign: "justify",
        fontSize: 16,
        padding: 10,
        lineHeight: 30,
        fontWeight:'300'
    }
})