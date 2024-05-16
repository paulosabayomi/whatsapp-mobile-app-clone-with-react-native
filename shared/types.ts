import { StyleProp, TextProps, View, ViewProps, ViewStyle } from "react-native";
import fonts from "./fonts";

// Define a type for the slice state
export interface IMainSlice {
    user_details: TUserDetails;
    messages: TMessage[];
    mode: TColorMode;
}

export interface IWText extends TextProps {
    fontFamily?: keyof typeof fonts;
}

export type TColorMode = "light" | "dark"

export interface IWView extends ViewProps {
    isParent?: boolean;
}

export interface ITabHeaderProps {
    title: string;
    icons: THeaderIcons[];
    bolder?: boolean;
    style?: StyleProp<ViewStyle>
}

export type THeaderIcons = {
    icon: any;
    onPress: Function
}

export type TContact = {
    id: number;
    name: string;
    lastMessage: string;
    profileImage: string;
};

export type TMessage = {
    id: number;
    message: string;
    time: string;
    sender_id: number;
    conversation_id: number;
}

export type TUserDetails = {
    id: number;
    name: string;
    profile_picture: string;
}

export interface ITabContext {
    navigation: any;
}