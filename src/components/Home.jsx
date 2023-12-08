import React from "react";
import News from "./News";
import Posts from "./Posts";
import { View } from "react-native-web";
import Header from "./header";

function Home(){
    return (
        <>
        <View>
            <Header/>
        </View>
        <View style={{marginTop: "100px"}}>
            <News/>
            <Posts/>
        </View>
        </>
    )
}

export default Home;