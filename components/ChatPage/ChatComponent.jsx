import { StyleSheet, Text, View, SafeAreaProvider, ActivityIndicator } from 'react-native'
import React,{ useState, useCallback, useEffect } from 'react'
import { GiftedChat } from "react-native-gifted-chat";
import axios from 'axios';



export default function ChatComponent(){

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Namami Gange!, What would you like to know?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Bhishma Bot',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    const userMessage = newMessages[0];
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));

    // Send the user's message to the backend
    sendMessageToBackend(userMessage.text);
  }, []);

  const sendMessageToBackend = async (text) => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://<YOUR_BACKEND_URL>/chat', { message: text });

      // Add the bot's response to the chat
      const botMessage = {
        _id: Math.random().toString(),
        text: response.data.reply,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'AI Bot',
        },
      };

      setMessages((previousMessages) => GiftedChat.append(previousMessages, [botMessage]));
    } catch (error) {
      console.error('Error communicating with backend:', error);
      const errorMessage = {
        _id: Math.random().toString(),
        text: 'Sorry, there was an error. Please try again later.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Bhishma Bot',
        },
      };
      setMessages((previousMessages) => GiftedChat.append(previousMessages, [errorMessage]));
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />}
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />

      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    backgroundColor: '#fff',
  },
})