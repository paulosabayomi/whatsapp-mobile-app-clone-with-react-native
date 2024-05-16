import React from "react";
import { WText, WView } from "../shared/themed";
import { useAppSelector } from "../shared/rdx-hooks";
import { RFastImage } from "../shared/ReUsables";
import useAppColor from "../shared/useColor";
// @ts-ignore
import AccountKeyIcon from "../assets/icons/settings/account.svg"
// @ts-ignore
import PadlockIcon from "../assets/icons/settings/padlock.svg"
// @ts-ignore
import NotificationIcon from "../assets/icons/settings/notification.svg"
// @ts-ignore
import LanguageIcon from "../assets/icons/settings/language.svg"
// @ts-ignore
import HelpIcon from "../assets/icons/settings/help.svg"
// @ts-ignore
import ChatIcon from "../assets/icons/chat-filled.svg"

const SettingsComponent = React.memo((props: any) => {
    const user_details = useAppSelector(state => state.main.user_details);
    const appColor = useAppColor()

    return (
        <WView isParent>

            <WView style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 20, margin: 20, borderBottomColor: 'lightgray', borderBottomWidth: .4}}>
                <WView>
                    <RFastImage url={user_details.profile_picture} style={{width: 75, height: 75, borderRadius: 75}} />
                </WView>
                <WView style={{marginLeft: 20}}>
                    <WText style={{fontSize: 22, marginBottom: 5}}>{user_details.name}</WText>
                    <WText style={{fontSize: 16, color: appColor.text_color_2}} fontFamily="roman">Hey there! I am using WhatsApp</WText>
                </WView>
            </WView>

            <WView>
                <SettingsList title="Account" desc="Security notifications, change number" icon={<AccountKeyIcon />} />
                <SettingsList title="Privacy" desc="Block contacts, disappearing messages" icon={<WView style={{width: 22, height: 22}}><PadlockIcon /></WView>} />
                <SettingsList callback={() => props.navigation.navigate("chat-settings")} title="Chats" desc="Theme, wallpapers, chat history" icon={<WView style={{width: 28, height: 28, backgroundColor: appColor.text_color_2, borderRadius: 10}}><ChatIcon /></WView>} />
                <SettingsList title="Notifications" desc="Message, group & call tones" icon={<WView style={{width: 22, height: 22}}><NotificationIcon /></WView>} />
                <SettingsList title="App language" desc="English (device's language)" icon={<WView style={{width: 22, height: 22}}><LanguageIcon /></WView>} />
                <SettingsList title="Help" desc="Help center, contact us, privacy policy" icon={<WView style={{width: 22, height: 22}}><HelpIcon /></WView>} />
            </WView>
        </WView>
    )
});

const SettingsList = React.memo((props: any) => {
    const appColor = useAppColor()
    return (
        <WView onTouchEnd={() => props.callback && props.callback()} style={{flexDirection: "row", alignItems: 'center', marginBottom: 15}}>
            <WView style={{width: 60, height: 60, paddingHorizontal: 5, marginHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}>
                {props.icon}
            </WView>

            <WView style={{marginLeft: 10}}>
                <WText style={{fontSize: 20}}  fontFamily="roman">{props.title}</WText>
                <WText style={{fontSize: 16, color: appColor.text_color_2}} fontFamily="roman">
                    {props.desc}
                </WText>
            </WView>
        </WView>
    )
})

export default SettingsComponent