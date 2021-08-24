import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
const Appcontainer =()=>{
    const isLoggedIn =true;
return(
<NavigationContainer>
    
   {isLoggedIn ?<DrawerNavigator/>:<AuthNavigator/>}
</NavigationContainer>

);
};
export default Appcontainer;