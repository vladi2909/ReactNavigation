import React from 'react';
import { Text, View, Button } from 'react-native';

export const Contacts = ({ navigation }) => {

  const loadScene = () => {
    navigation.goBack();
  }

  return (
    <View>
      <Text style={{color: 'red'}}>Contacts</Text>
      <Button title="back" onPress={loadScene} />
    </View>
  );
}