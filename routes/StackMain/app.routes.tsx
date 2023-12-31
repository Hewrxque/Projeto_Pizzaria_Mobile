import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashBoard from '../../src/screens/DashBoard';
import Order from '../../src/screens/Order';
import FinishOrder from '../../src/screens/FinishOrder';

export type StackPramsList = {
  Dashboard: undefined;
  Order: {
    number: number | string;
    order_id: string;
  };
  FinishOrder: {
    number: number | string;
    order_id: string;
  }
};

const Stack = createNativeStackNavigator<StackPramsList>();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={DashBoard}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="FinishOrder"
        component={FinishOrder}
        options={{
          title: 'Finalizando',
          headerStyle:{
            backgroundColor: '#1D1D2E',
          },
          headerTintColor: '#FFFFFF'
        }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
