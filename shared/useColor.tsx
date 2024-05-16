import React from "react";
import { useColorScheme } from "react-native";
import colors from "./colors";
import { useAppSelector } from "./rdx-hooks";

const useAppColor = () => {
    const colorMode = useAppSelector(state => state.main.mode);
    return colors[colorMode];
}

export default useAppColor