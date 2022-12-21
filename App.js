import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/screen/Dashboard/Dashboard'
import Album from './src/screen/Album/Album'
import DetailedAlbum from './src/screen/DetailedAlbum/DetailedAlbum'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Photos" component={Dashboard} />
        <Stack.Screen name="Album" component={Album} />
        <Stack.Screen name="DetailedAlbum" component={DetailedAlbum} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
