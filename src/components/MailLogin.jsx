import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

function MailLogin(){
    return (
        <View>
            <TextInput placeholder="Saisie votre e-mail" style={styles.inputStyle} />
        </View>
    )
}

export default MailLogin;

const styles = StyleSheet.create({
    inputStyle:{
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#9452ba"
    }
})