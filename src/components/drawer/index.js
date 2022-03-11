import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from "react-native"
import { Box, Switch, Text, Divider, Pressable, Button, Icon } from "native-base"
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import {
    useTheme
} from '@react-navigation/native';

// import { useNavigationState, useFocusEffect } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



function Sidebar(props) {
  
    const [isDarkTheme, setDarkTheme] = useState(false)

    return (
        <Box
            flex={1}>
            <DrawerItem
                label="Menu" />
            <Divider />
            <DrawerContentScrollView {...props}>
                {/* <DrawerItemList {...props} /> */}
                

                <Pressable p={4} onPress={() => props.navigation.navigate('Shop')} style={{justifyContent:'center'}} >
                    <Text><Icon as={MaterialIcons} name="verified-user" size="xs" />  Privacy</Text>
                </Pressable>

                <Pressable p={4} onPress={() => props.navigation.navigate('Auth')} style={{justifyContent:'center'}} >
                    <Text><Icon as={MaterialIcons} name="supervised-user-circle" size="xs" />  Brokers</Text>
                </Pressable>


                <Pressable p={4} onPress={() => props.navigation.navigate('NotificationStack')} style={{justifyContent:'center'}} >
                    <Text><Icon as={MaterialCommunityIcons} name="bell" size="xs" />  Notifications</Text>
                </Pressable>


                <Pressable p={4} onPress={() => props.navigation.navigate('Auth')} style={{justifyContent:'center'}} >
                    <Text><Icon as={MaterialCommunityIcons} name="account" size="xs" />  Profile</Text>
                </Pressable>


                <Pressable p={4} onPress={() => props.navigation.navigate('SettingStack')} style={{justifyContent:'center'}} >
                    <Text><Icon as={MaterialCommunityIcons} name="cog" size="xs" />  Settings</Text>
                </Pressable>

            </DrawerContentScrollView>
            <Divider />
            {/* <DrawerItem
                icon={() => <Icon name="exit" color={colors.text} />}
                label="Sign Out"
            /> */}

        </Box>

    );
}

const styles = StyleSheet.create({
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }


})

export default Sidebar;