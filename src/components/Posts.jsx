import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Card } from '@rneui/themed';
import Speech from "./Speech";
import { useNavigation } from "@react-navigation/native";

function Posts(){
    const navigation = useNavigation();
    return (
        <View>
            <Card>
            <Card.Title style={{fontSize: '16px'}}>Créez des posts sans efforts</Card.Title>
            <Card.Divider/>
            <Button onPress={() => navigation.navigate('Connecter')} title="Je veux essayer !" />
        </Card>
        </View>
    )
}

export default Posts; 