
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Register from './pages/Register';
import Relatory from './pages/Relatory';

const Stack = createStackNavigator();

function Routes() {
  return (
      <Stack.Navigator screenOptions={{
          headerShown: false, 
      } }>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Relatory" component={Relatory} />
      </Stack.Navigator>
  );
}

export default Routes;