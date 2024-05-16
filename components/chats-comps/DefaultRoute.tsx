import React from "react";
import { WText, WView } from "../../shared/themed";
import { ChatHead, TabsHeaderComponent } from "../../shared/ReUsables";
// @ts-ignore
import CameraIcon from '../../assets/icons/camera.svg'
// @ts-ignore
import MenuIcon from '../../assets/icons/menu.svg'
// @ts-ignore
import ArchiveIcon from '../../assets/icons/archive.svg'

import { FlatList, Image, TextInput, View } from "react-native";
import useAppColor from "../../shared/useColor";
import fonts from "../../shared/fonts";
import contacts from "../../shared/contacts";
import { Menu } from "react-native-paper";
import { TabComponentContenxt } from "../TabComponent";

const DefaultRoute = React.memo((props: any) => {
    const appColor = useAppColor();
    const [visible, setVisible] = React.useState<boolean>(false);
    const navigation = React.useContext(TabComponentContenxt).navigation

    const handleShowMenu = React.useCallback(() => {
        setVisible(!visible)
    }, [visible])

    const headerIcons = [
        {icon: <CameraIcon />, onPress: () => null}, 
        // {icon: <WView onTouchEnd={() => handleShowMenu()}><MenuIcon /></WView>, onPress: () => null}, 
    ]
    return (
        <WView isParent>
            <FlatList 
                data={[{}]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={() => <>
                        <WView style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TabsHeaderComponent style={{flex: 1}} bolder={true} icons={headerIcons} title="WhatsApp" />
                                <Menu
                                    visible={visible}
                                    onDismiss={handleShowMenu}
                                    anchor={<WView onTouchEnd={() => handleShowMenu()} style={{width: 22, paddingTop: 8, marginHorizontal: 10}}><MenuIcon /></WView>}
                                    contentStyle={{
                                        backgroundColor: appColor.dark_blue_10,
                                        paddingRight: 20,
                                        left: -50
                                    }}
                                    
                                    >
                                    <Menu.Item onPress={() => {}} titleStyle={{color: appColor.text_color_1, fontFamily: fonts.roman}} title="New group" />
                                    <Menu.Item onPress={() => {}} titleStyle={{color: appColor.text_color_1, fontFamily: fonts.roman}} title="New broadcast" />
                                    <Menu.Item onPress={() => {}} titleStyle={{color: appColor.text_color_1, fontFamily: fonts.roman}} title="Linked devices" />
                                    <Menu.Item onPress={() => {}} titleStyle={{color: appColor.text_color_1, fontFamily: fonts.roman}} title="Starred Messages" />
                                    <Menu.Item onPress={() => {navigation.navigate('Settings'); handleShowMenu()}} titleStyle={{color: appColor.text_color_1, fontFamily: fonts.roman}} title="Settings" />
                                </Menu>
                        </WView>
                        <View style={{paddingHorizontal: 10,}}>
                            <View style={{position: 'relative', justifyContent: 'center'}}>
                                <Image style={{width: 30, height: 30, position: 'absolute', zIndex: 4, left: 10}} source={require('../../assets/images/meta-ai.png')} />
                                <TextInput 
                                    style={{height: 50, paddingLeft: 50, fontFamily: fonts.medium, backgroundColor: appColor.inverse_gray_dark_50, fontSize: 18, width: '100%', borderRadius: 50}}
                                    placeholder="Ask Meta AI or Search"
                                    placeholderTextColor={appColor.text_color_2}
                                />
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 60, marginBottom: 10}}>
                            <View style={{width: 26, height: 26}}>
                                <ArchiveIcon />
                            </View>
                            <View style={{flexGrow: 1, marginLeft: 15}}>
                                <WText style={{fontSize: 20}}>Archive</WText>
                            </View>
                            <View>
                                <WText style={{color: appColor.green_100}} fontFamily="roman">6</WText>
                            </View>
                        </View>

                        <View style={{paddingHorizontal: 10}}>
                            {contacts.map(contact => 
                                <ChatHead contact={contact} navigation={navigation} />
                            )}

                        </View>
                </>}
            />
        </WView>
    )
});

export default DefaultRoute