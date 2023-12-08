import { View } from 'react-native';
import Header from './src/components/header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Speech from './src/components/Speech';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MailLogin from './src/components/MailLogin';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Header" component={Header} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Speech" component={Speech} />
          <Stack.Screen name="Connecter" component={MailLogin} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}