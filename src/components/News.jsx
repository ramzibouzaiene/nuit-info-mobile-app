import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from '@rneui/themed';

function News(){
    return (
        <View>
        <Card style={styles.cardStyle}>
            <Card.Title style={styles.title}>News</Card.Title>
            <Card.Divider/>
            <Text style={{fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, cupiditate doloremque. Repudiandae totam fugiat aspernatur repellendus ex illum unde quas eos! Nisi laborum corporis quis, quam atque soluta impedit similique.</Text>
        </Card>
        </View>
       
    )
}

export default News;

const styles = StyleSheet.create({
    title: {
        fontSize: '20px'
    },
    cardStyle: {
        borderRadius: 50,
        backgroundColor: '#bfeaf0'
    }
})