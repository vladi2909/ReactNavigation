import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  const [state, setState] = useState(33);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: '#000'}}>Home Screen</Text>
      <Button title='Go to Details' onPress={() => navigation.navigate('Detail', state)} />
    </View>
  );
}