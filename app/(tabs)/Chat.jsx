import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'
import Customheader from '@/components/CustomHeader'
import ChatComponent from '@/components/ChatPage/ChatComponent'

const Chat = () => {
  return (
    <View>
    <Stack.Screen
        options={{header:()=> <Customheader/>}}
      />
      <ChatComponent />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})