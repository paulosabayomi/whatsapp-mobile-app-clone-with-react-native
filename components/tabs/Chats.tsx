import React from "react";
import { Image, View } from "react-native";
import { WText, WView } from "../../shared/themed";
import DefaultRoute from "../chats-comps/DefaultRoute";
import ChatRoute from "../chats-comps/ChatRoute";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { FAB } from "react-native-paper";
import useAppColor from "../../shared/useColor";

// @ts-ignore
import ChatPlusIcon from "../../assets/icons/chat-plus.svg"
import { RFastImage } from "../../shared/ReUsables";

const Stack = createNativeStackNavigator();

const ChatsComponent = React.memo((props: any) => {
    const appColor = useAppColor();

    return (
        <WView style={{flex: 1}}>
            <DefaultRoute navigation={props.navigation} />
            {/* <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="chatDefault" component={DefaultRoute} />
                <Stack.Screen name="chatPage" options={{headerBackVisible: false, headerTitle: ''}} component={ChatRoute} />
            </Stack.Navigator> */}
            <FAB
                icon={() => <WView><Image style={{width: 25, height: 25}} source={require('../../assets/images/meta-ai.png')} /></WView>}
                style={{

                    position: "absolute",
                    bottom: 100,
                    right: 20,
                    width: 45,
                    height: 45,
                    backgroundColor: appColor.inverse_gray_dark_50,
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0
                }}
                onPress={() => console.log('Pressed')}
            />

            <FAB
                icon={() => <WView style={{width: 22, height: 22}}><ChatPlusIcon /></WView>}
                style={{
                    
                    position: "absolute",
                    bottom: 20,
                    right: 10,
                    width: 60,
                    height: 60,
                    backgroundColor: appColor.green_100,
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0
                }}
                onPress={() => console.log('Pressed')}
            />
        </WView>
    )
});

export default ChatsComponent