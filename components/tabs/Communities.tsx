import React from "react";
import { View } from "react-native";
import { WText, WView } from "../../shared/themed";
import { TabsHeaderComponent } from "../../shared/ReUsables";
// @ts-ignore
import CameraIcon from '../../assets/icons/camera.svg'
// @ts-ignore
import MenuIcon from '../../assets/icons/menu.svg'
// @ts-ignore
import PlusIcon from '../../assets/icons/plus.svg'
// @ts-ignore
import CommunitiesIcon from '../../assets/icons/community.svg'

import useAppColor from "../../shared/useColor";


const CommunitiesComponent = React.memo((props: any) => {
    const appColor = useAppColor();

    const headerIcons = [
        {icon: <CameraIcon />, onPress: () => null}, 
        {icon: <MenuIcon />, onPress: () => null}, 
    ]

    return (
        <WView isParent>
            <TabsHeaderComponent title="Communities" icons={headerIcons} />

            <WView style={{flexDirection: "row", alignItems: 'center', padding: 20}}>
                <WView style={{width: 60, height: 60, position: 'relative', borderRadius: 15, backgroundColor: appColor.text_color_2, alignItems: 'center', justifyContent: 'center'}}>
                    <WView>
                        <CommunitiesIcon />
                    </WView>

                    <WView style={{position: 'absolute', borderColor: appColor.dark_blue_10, borderWidth: 1, width: 25, padding: 2, height: 25, alignItems: 'center', borderRadius: 50, justifyContent: 'center', bottom: 0, right: -5, backgroundColor: appColor.green_100}}>
                        <PlusIcon />
                    </WView>
                </WView>

                <WView style={{flexGrow: 1, marginLeft: 20}}>
                    <WText style={{fontSize: 20}}>New community</WText>
                </WView>
            </WView>


        </WView>
    )
});

export default CommunitiesComponent