import { View, Text,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => navigation.toggleDrawer()} title="go to shop"/>
    </View>
  )
}

export default Home