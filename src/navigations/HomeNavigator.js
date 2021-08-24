import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { CONTACT_DETAILS, CONTACT_LIST, CREATE_CONTACT, Settings } from '../constants/routename';
import Contact from '../screens/Contacts';

const HomeNavigator = () =>{
const HomeStack = createStackNavigator();
return <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
    <HomeStack.Screen name={CONTACT_LIST} component={Contact}/> 
    <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetail}/> 
    <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}/>
    <HomeStack.Screen name={Settings} component={settings}/> 
</HomeStack.Navigator>
}   
export default HomeNavigator;