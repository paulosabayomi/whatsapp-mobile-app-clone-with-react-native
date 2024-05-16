import React from "react";
import { Text, View } from "react-native";
import fonts from "./fonts";
import { IWText, IWView } from "./types";
import useAppColor from "./useColor";

export const WText = React.memo((props: IWText) => {
    const appColor = useAppColor();

    return (
        <Text {...props} style={[{color: appColor.text_color_1}, {fontFamily: fonts[props.fontFamily as keyof typeof fonts] ?? fonts.medium}, props.style]}>
            {props.children}
        </Text>
    )
})

export const WView = React.memo((props: IWView) => {
    const appColor = useAppColor();

    return (
        <View {...props} style={[props.isParent && {flex: 1, backgroundColor: appColor.dark_blue_10}, props.style,]}>
            {props.children}
        </View>
    )
})