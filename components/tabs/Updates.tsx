import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WView } from "../../shared/themed";
import DefaultUpdateRoute from "../updates-comps/DefaultUpdateRoute";
import ChatRoute from "../chats-comps/ChatRoute";
import { NavigationContainer } from "@react-navigation/native";
import { FAB } from "react-native-paper";
import { Image } from "react-native-svg";
import useAppColor from "../../shared/useColor";
// @ts-ignore
import CameraIcon from "../../assets/icons/camera.svg"
// @ts-ignore
import PenIcon from "../../assets/icons/pen.svg"

const Stack = createNativeStackNavigator();

const UpdatesComponent = React.memo((props: any) => {
    const appColor = useAppColor();

    return (
        <WView style={{flex: 1}}>
            <DefaultUpdateRoute />
            {/* <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="updatesDefault" component={DefaultUpdateRoute} />
                <Stack.Screen name="chatPage" options={{headerBackVisible: false, headerTitle: ''}} component={ChatRoute} />
            </Stack.Navigator> */}

            <FAB
                icon={() => <WView style={{width: 22, height: 22}}><PenIcon /></WView>}
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
                icon={() => <WView style={{width: 22, height: 22}}><CameraIcon /></WView>}
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

export default UpdatesComponent