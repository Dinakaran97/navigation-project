import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import { LOGIN, SIGNUP } from '../constants/routename';

const AuthNavigator = () =>{
const AuthStack = createStackNavigator();
return <AuthStack.Navigator>
    <AuthStack.Screen name={LOGIN} component={Login}/> 
    <AuthStack.Screen name={SIGNUP} component={Signup}/> 
 
</AuthStack.Navigator>
}   
export default AuthNavigator;