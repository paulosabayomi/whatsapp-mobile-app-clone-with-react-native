/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text
} from 'react-native';
import useAppColor from './shared/useColor';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabComponent from './components/TabComponent';
import SettingsComponent from './components/Settings';
// @ts-ignore
import SearchIcon from "./assets/icons/search.svg"
import { WView } from './shared/themed';
import fonts from './shared/fonts';
import ChatSettings from './components/ChatSettings';
import { useAppDispatch } from './shared/rdx-hooks';
import { setColorMode } from './shared/rdx-slice';
import storage, { colorModeStoreName } from './shared/db-store';
import ChatRoute from './components/chats-comps/ChatRoute';

const Stack = createNativeStackNavigator();



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const appColor = useAppColor();
  const dispatch = useAppDispatch();


  React.useLayoutEffect(() => {
    storage.load({key: colorModeStoreName})
    .then((data: any) => {
      console.log("color data", data);
      // dispatch(setColorMode())
      
    })
    .catch(err => err)
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={appColor.dark_blue_10}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown: false}} component={TabComponent} />
          <Stack.Screen name="Settings" 
            options={{
              headerRight(props) {
                return <WView style={{width: 28, height: 28}}><SearchIcon /></WView>
              },
              headerTitleStyle: {
                fontFamily: fonts.medium,
                fontSize: 25,
                color: appColor.text_color_1
              },
              headerStyle: {
                backgroundColor: appColor.dark_blue_10
              }
            }} 
            component={SettingsComponent} />
            <Stack.Screen name='chat-settings' 
              options={{
                headerTitleStyle: {
                  fontFamily: fonts.roman,
                  fontSize: 28,
                  color: appColor.text_color_1
                },
                headerTitle: "Chats",
                headerStyle: {
                  backgroundColor: appColor.dark_blue_10
                }
              }} 
              component={ChatSettings} />
            <Stack.Screen 
                options={{
                  headerTitle: '',
                  headerStyle: {
                    backgroundColor: appColor.dark_blue_10
                  }
              }}
                name='chatDefault'
                component={ChatRoute}
              />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );

}

export default App;
