import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import Profile from './screens/profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from './screens/profile/setting';
import Shop from './screens/home/shop';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainStack = ()=>{
    return(
        <Stack.Navigator 
            screenOptions={{ headerShown:false}}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Shop" component={Shop} />

        </Stack.Navigator>
    )
}

const ProfileStack = ()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    )
}

const BottonTab = ()=>{
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen name="MainHomeStack" component={MainStack} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} />
        </Tab.Navigator>
    )
}

function MyDrawer() {
    return (
        <Drawer.Navigator  >
            <Drawer.Screen name="BottonTab" component={BottonTab} />
            <Drawer.Screen name="ShopScreen" component={Shop} />
        </Drawer.Navigator>
    );
}

const Routes = () => {
  return (
      <NavigationContainer
         
      >
      
      
      
          <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Main" component={MyDrawer} />
              
          </Stack.Navigator>
      
      
      
      
      </NavigationContainer>
  )
}

export default Routes