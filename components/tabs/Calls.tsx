import React from "react";
import { WText, WView } from "../../shared/themed";
import { CallHead, TabsHeaderComponent } from "../../shared/ReUsables";
// @ts-ignore
import CameraIcon from '../../assets/icons/camera.svg'
// @ts-ignore
import MenuIcon from '../../assets/icons/menu.svg'
// @ts-ignore
import SearchIcon from '../../assets/icons/search.svg'
// @ts-ignore
import LinkIcon from '../../assets/icons/link.svg'
import useAppColor from "../../shared/useColor";
import { FlatList } from "react-native";

const CallsComponent = React.memo((props: any) => {
    const appColor = useAppColor();
    
    const headerIcons = [
        {icon: <CameraIcon />, onPress: () => null}, 
        {icon: <SearchIcon />, onPress: () => null}, 
        {icon: <MenuIcon />, onPress: () => null}, 
    ]

    return (
        <WView isParent>
            <TabsHeaderComponent title="Communities" icons={headerIcons} />

            <FlatList 
                data={[{}]}
                contentContainerStyle={{paddingHorizontal: 15}}
                renderItem={() => <>
                    <WView style={{flexDirection: 'row', marginVertical: 20}}>
                        <WView style={{width: 55, alignItems: 'center', justifyContent: 'center', height: 55, backgroundColor: appColor.green_100, borderRadius: 80}}>
                            <WView style={{width: 30, height: 30}}>
                            <LinkIcon />

                            </WView>
                        </WView>

                        <WView style={{flexGrow: 1, marginLeft: 20}}>
                            <WText style={{fontSize: 20}}>Create call link</WText>
                            <WText style={{fontSize: 17, color: appColor.text_color_2}} fontFamily="roman">Share a link for your WhatsApp call</WText>
                        </WView>
                    </WView>

                    <WView style={{}}>
                        <WText style={{fontSize: 18, marginBottom: 20}}>Recent</WText>

                        <CallHead />
                        <CallHead />
                        <CallHead />
                        <CallHead />
                        <CallHead />
                        <CallHead />
                        <CallHead />
                        <CallHead />
                        <CallHead />
                    </WView>
                </>}
            />



        </WView>
    )
});

export default CallsComponent