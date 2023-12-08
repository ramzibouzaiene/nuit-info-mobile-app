import { Button } from "@rneui/base";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Linkedin = (
    <Icon.Button
      name="linkedin-square"
      onPress={console.log("test")}
    >
    </Icon.Button>
);

const Facebook = (
    <Icon.Button
      name="facebook-square"
      onPress={console.log("test 2")}
    >
    </Icon.Button>
);

const Instagram = (
    <Icon.Button
      name="square-instagram"
      onPress={console.log("test 3")}
    >
    </Icon.Button>
);
function Speech(){
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Choisie le type de poste</Text>
            <View style={styles.subContainer}>
                {Linkedin}
                {Facebook}
                {Instagram}
            </View>
        </View>
    )
}

export default Speech;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
    },
    subContainer:{
        display: "flex",
        flexDirection: "row",
        gap:15,
        marginTop: 10
    },
    textStyle:{
        fontSize: 40
    }
})