import React from 'react';
import { View, Text, Button } from 'react-native';

export const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: '#000'}}>Details Screen</Text>
      <Button title='Go to Details again' onPress={() => navigation.push('Detail')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}