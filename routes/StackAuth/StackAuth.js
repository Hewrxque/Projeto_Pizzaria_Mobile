import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../src/screens/Login";

export default function StackAuth(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
    )
}