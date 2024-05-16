import React from "react";
import { Image, ImageStyle, RegisteredStyle, StyleProp, StyleSheet, View } from "react-native";
import { WText } from "./themed";
import useAppColor from "./useColor";
import { ITabHeaderProps, TContact } from "./types";
import fonts from "./fonts";
import FastImage from "react-native-fast-image";
// @ts-ignore
import CallIcon from "../assets/icons/call.svg"
import { useNavigation } from "@react-navigation/native";

export const TabsHeaderComponent = React.memo((props: ITabHeaderProps) => {
    const appColor = useAppColor()
    return (
        <View style={[styles.headerStyle, props.style, {backgroundColor: appColor.dark_blue_10}]}>
            <WText fontFamily="roman" style={[{fontSize: 28}, props.bolder && {color: appColor.w_logo_color, fontFamily: fonts.bold}]}>
                {props.title}
            </WText>
            <View style={styles.headerIconContainer}>
                {props.icons.map((icon) => <View onTouchEnd={() => icon.onPress()} key={Math.floor(Math.random() * 99999).toString()} style={{width: 24, height: 24, marginLeft: 20}}>{icon.icon}</View>)}
            </View>
        </View>
    )
});

export const ChatHead = React.memo((props: {contact: TContact; navigation: any;}) => {
    const appColor = useAppColor();

    return (
        <View onTouchEnd={() => props.navigation.navigate('chatDefault', {contact: props.contact})} key={Math.floor(Math.random() * 9999999999999).toString()} style={{flexDirection: 'row', alignContent: 'center', marginBottom: 20}}>
            <View>
                <FastImage
                    style={{ width: 60, height: 60, borderRadius: 60 }}
                    source={{
                        uri: props.contact.profileImage,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
            <View style={{flexGrow: 1, marginLeft: 10}}>
                <WText style={{fontSize: 20, marginBottom: 2}}>{props.contact.name}</WText>
                <WText style={{color: appColor.text_color_2, fontSize: 17,}} fontFamily="roman">{props.contact.lastMessage.slice(0, 30)}</WText>
            </View>
            <View>
                <WText style={{color: appColor.text_color_2}} fontFamily="roman">Today</WText>
            </View>
        </View>
    )
})

export const CallHead = React.memo((props: any) => {
    const appColor = useAppColor()
    return (
        <View key={Math.floor(Math.random() * 9999999999999).toString()} style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
            <View>
                <FastImage
                    style={{ width: 60, height: 60 }}
                    source={{
                        uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/521.jpg',
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
            <View style={{flexGrow: 1, marginLeft: 10}}>
                <WText style={{fontSize: 20, marginBottom: 2}}>Contact 1</WText>
                <WText style={{color: appColor.text_color_2, fontSize: 18,}} fontFamily="roman">May 10, 3:35 PM</WText>
            </View>
            <View>
                <View style={{width: 25, height: 25}}>
                    <CallIcon />
                </View>
            </View>
        </View>
    )
})

export const RFastImage = React.memo((props: {url: string; style: StyleProp<any>}) => {
    return (
        <FastImage
            style={[{ width: 60, height: 60 }, props.style]}
            source={{
                uri: props.url,
                priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
        />
    )
})

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        height: 60,
    },
    headerIconContainer: {
        flexDirection: 'row',

    }
})