import React from "react";
import { Provider } from "react-redux";
import { store } from "../shared/rdx-store";
import App from "../App";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

const ProviderComp = React.memo((props: any) => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <PaperProvider>
                    <App />
                </PaperProvider>
            </SafeAreaProvider>
        </Provider>
    )
})

export default ProviderComp