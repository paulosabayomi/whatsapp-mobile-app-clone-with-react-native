/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text
} from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import useAppColor from '../shared/useColor';
// @ts-ignore
import ChatOutlineIcon from "../assets/icons/chat-outline.svg"
// @ts-ignore
import ChatFilledIcon from "../assets/icons/chat-filled.svg"
// @ts-ignore
import UpdatesIcon from "../assets/icons/updates.svg"
// @ts-ignore
import CommunityOutline from "../assets/icons/community-outline.svg"
// @ts-ignore
import CommunityFilled from "../assets/icons/community-filled.svg"
// @ts-ignore
import CallIcon from "../assets/icons/call.svg"
import fonts from '../shared/fonts';
import ChatsComponent from '../components/tabs/Chats';
import UpdatesComponent from '../components/tabs/Updates';
import CommunitiesComponent from '../components/tabs/Communities';
import CallsComponent from '../components/tabs/Calls';
import { ITabContext } from '../shared/types';

export const TabComponentContenxt = React.createContext({} as ITabContext)



function TabComponent(props: any): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const appColor = useAppColor()

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'chats', title: 'Chats', focusedIcon: (props: any) => <ChatFilledIcon {...props} />, unfocusedIcon: (props: any) => <ChatOutlineIcon {...props} />},
    { key: 'updates', title: 'Updates', focusedIcon: (props: any) => <UpdatesIcon {...props} />, unfocusedIcon: (props: any) => <UpdatesIcon {...props} /> },
    { key: 'communities', title: 'Communities', focusedIcon: (props: any) => <CommunityFilled {...props} />, unfocusedIcon: (props: any) => <CommunityOutline {...props} /> },
    { key: 'calls', title: 'Calls', focusedIcon: (props: any) => <CallIcon {...props} />, unfocusedIcon: (props: any) => <CallIcon {...props} /> },
  ]);


  const renderScene = BottomNavigation.SceneMap({
    chats: ChatsComponent,
    updates: UpdatesComponent,
    communities: CommunitiesComponent,
    calls: CallsComponent,
  });

  return (
    <TabComponentContenxt.Provider value={{navigation: props.navigation}}>
        <SafeAreaView style={{flex: 1}}>
        <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={appColor.dark_blue_10}
        />
        <BottomNavigation
            activeIndicatorStyle={{
            backgroundColor: appColor.green_50
            }}
            barStyle={{backgroundColor: appColor.dark_blue_10, borderTopWidth: .3, borderTopColor: 'lightgray'}}
            renderLabel={(props) => <Text {...props} style={{fontFamily: fonts.medium, height: 50, color: appColor.text_color_1, textAlign: 'center'}}>{props.route.title}</Text>}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
        </SafeAreaView>
    </TabComponentContenxt.Provider>
  );

}

export default TabComponent;
