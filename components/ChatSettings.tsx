import React from "react";
import { WText, WView } from "../shared/themed";
import useAppColor from "../shared/useColor";
import { TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "../shared/rdx-hooks";
import { Button, Dialog, Portal, RadioButton } from "react-native-paper";
import fonts from "../shared/fonts";
import { TColorMode } from "../shared/types";
import { setColorMode } from "../shared/rdx-slice";
import storage, { colorModeStoreName } from "../shared/db-store";

const ChatSettings = React.memo((props: any) => {
    const appColor = useAppColor();
    const colorMode = useAppSelector(state => state.main.mode);
    const dispatch = useAppDispatch()
    const [visible, setVisible] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<TColorMode>(colorMode)

    const handleSetColorMode = React.useCallback(() => {
        dispatch(setColorMode(value));
        storage.save({key: colorModeStoreName, data: value})
    }, [value])

    const handleShowDialog = React.useCallback(() => {
        setVisible(!visible)
    }, [visible])

    return (
        <WView isParent style={{paddingHorizontal: 20, paddingTop: 30}}>
            <WView style={{marginBottom: 15}}>
                <WText style={{color: appColor.text_color_2, fontSize: 18}}>Display</WText>
            </WView>
            <TouchableOpacity style={{marginLeft: 40}} onPress={handleShowDialog}>
                <WText style={{fontSize: 18}} fontFamily="roman">Theme</WText>
                <WText style={{fontSize: 16, color: appColor.text_color_2}} fontFamily="roman">
                    {colorMode}
                </WText>
            </TouchableOpacity>

            <Portal>
                <Dialog visible={visible} style={{backgroundColor: appColor.dark_blue_10}} onDismiss={handleShowDialog}>
                    <Dialog.Title style={{fontFamily: fonts.medium, fontSize: 30, color: appColor.text_color_1}}>
                        Choose theme
                    </Dialog.Title>
                    <Dialog.Content>
                        <WView style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                            <RadioButton
                                value="Light"
                                color={appColor.green_100}
                                status={ value === 'light' ? 'checked' : 'unchecked' }
                                onPress={(value) => setValue('light')}
                                
                            />
                            <WText style={{marginLeft: 20, fontSize: 18}} fontFamily="roman">Light</WText>
                        </WView>
                        <WView style={{flexDirection: 'row',  alignItems: 'center'}}>
                            <RadioButton
                                value="Dark"
                                color={appColor.green_100}
                                status={ value === 'dark' ? 'checked' : 'unchecked' }
                                onPress={() => setValue('dark')}
                            />
                            <WText style={{marginLeft: 20, fontSize: 18}} fontFamily="roman">Dark</WText>
                        </WView>
                    
                    
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={handleShowDialog} labelStyle={{fontFamily: fonts.medium, fontSize: 16, color: appColor.green_100}}>Cancel</Button>
                        <Button onPress={handleSetColorMode} labelStyle={{fontFamily: fonts.medium, fontSize: 16, color: appColor.green_100}}>OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>


        </WView>
    )
})

export default ChatSettings