import React from 'react';
import { View, Text, Button } from 'react-native';

export const Main = ({ navigation }) => {
  const loadScene = () => {
    navigation.navigate('Contacts');
  }

  return (
    <View>
      <Text style={{color: 'blue', fontSize: 22, textAlign: 'center'}}>Main</Text>
      <Button onPress={loadScene} title='open' />
    </View>
  );
}