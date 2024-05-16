import React from "react";
import { WText, WView } from "../../shared/themed";
import useAppColor from "../../shared/useColor";
import { TContact, TMessage } from "../../shared/types";
import { RFastImage } from "../../shared/ReUsables";
// @ts-ignore
import MenuIcon from '../../assets/icons/menu.svg'
// @ts-ignore
import CallIcon from '../../assets/icons/call.svg'
// @ts-ignore
import VideoIcon from '../../assets/icons/video.svg'
// @ts-ignore
import BackArrow from '../../assets/icons/arrow-left.svg'
// @ts-ignore
import CheckMarkIcon from '../../assets/icons/checkmark.svg'
// @ts-ignore
import MicIcon from '../../assets/icons/mic.svg'
// @ts-ignore
import SmileyIcon from '../../assets/icons/grin.svg'
// @ts-ignore
import PaperclipIcon from '../../assets/icons/paperclip.svg'
// @ts-ignore
import CameraIcon from '../../assets/icons/camera.svg'
// @ts-ignore
import SendIcon from '../../assets/icons/send.svg'

import { FlatList, ImageBackground, TextInput } from "react-native";
import { useAppDispatch, useAppSelector } from "../../shared/rdx-hooks";
import fonts from "../../shared/fonts";
import { setMessage } from "../../shared/rdx-slice";

const ChatRoute = React.memo((props: any) => {
    const appColor = useAppColor();
    const routeParams = props.route.params.contact as TContact;
    const cur_user_detls = useAppSelector(state => state.main.user_details);
    const [chatValue, setChatValue] = React.useState("");
    const messages = useAppSelector(state => state.main.messages);
    const dispatch = useAppDispatch()
 
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft(hprops: any) {
                console.log("props", routeParams);
                
                return <WView style={{flexDirection: 'row', alignItems: 'center'}}>
                        <WView style={{width: 30, height: 30,}} onTouchEnd={() => props.navigation.goBack()}>
                            <BackArrow />
                        </WView>
                        <RFastImage url={routeParams.profileImage} style={{width: 45, height: 45, borderRadius: 50}} />
                        <WView style={{marginLeft: 10}}>
                            <WText style={{fontSize: 20}}>
                                {routeParams.name}
                            </WText>
                            <WText fontFamily="roman">
                                last seen today at 12:05 PM
                            </WText>

                        </WView>
                </WView>
            },

            headerRight(props: any) {
                return <WView style={{flexDirection: 'row', alignItems: 'center'}}>
                    <WView style={{width: 30, height: 30, marginLeft: 10, justifyContent: 'center'}}>
                        <VideoIcon />
                    </WView>
                    <WView style={{width: 30, height: 30, marginLeft: 10, justifyContent: 'center'}}>
                        <CallIcon />
                    </WView>
                    <WView style={{width: 30, height: 30, marginLeft: 10, justifyContent: 'center'}}>
                        <MenuIcon />
                    </WView>
                </WView>
            }
        })
    }, [])

    const renderItem = (props: TMessage) => {
        return (
            <WView style={{flexDirection: 'row', justifyContent: props.sender_id == cur_user_detls.id ? 'flex-end' : 'flex-start', paddingVertical: 5}}>
                <WView style={{backgroundColor: props.sender_id == cur_user_detls.id ? appColor.green_50 : appColor.dark_blue_50, alignItems: 'flex-end', elevation: 2, padding: 8, borderRadius: 10, width: 'auto', flexDirection: 'row'}}>
                    <WView style={{maxWidth: 250}}>
                        <WText fontFamily="roman" style={{fontSize: 16}}>{props.message}</WText>
                    </WView>
                    <WView style={{flexDirection: 'row', marginLeft: 8}}>
                        <WText fontFamily="roman" style={{color: 'gray'}}>{props.time}</WText>
                        <WView style={{}}>
                            <CheckMarkIcon />
                        </WView>
                    </WView>
                </WView>
            </WView>
        )
    }

    const handleSubmit = React.useCallback(() => {
        if (chatValue !== '') {
            const d = new Date()
            const message: TMessage = {
                id: messages.length + 1,
                message: chatValue,
                sender_id: cur_user_detls.id,
                conversation_id: routeParams.id,
                time: d.getHours() + ":" + d.getMinutes() + " PM"
            }

            dispatch(setMessage(message));
            setChatValue('')

            if (messages.length % 5 == 0) {
                const dummy_message: TMessage = {
                    id: messages.length + 1,
                    message: "Yeah you are amazing, keep it up",
                    sender_id: routeParams.id,
                    conversation_id: routeParams.id,
                    time: d.getHours() + ":" + d.getMinutes() + " PM"
                }
                dispatch(setMessage(dummy_message));
            }

        }
    }, [chatValue, messages])

    return (
        <WView isParent style={{backgroundColor: appColor.dark_blue_50, paddingTop: 8, position: 'relative'}}>
            <ImageBackground source={require('../../assets/images/whatsapp-bg.png')} style={{width: '100%', height: '100%', backgroundColor: appColor.chat_bg, position: 'absolute', top: 0, right: 0, zIndex: -1}} />
            <FlatList 
                data={messages.filter(msg => msg.conversation_id == routeParams.id)}
                renderItem={(props) => renderItem(props.item)}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{paddingHorizontal: 10, flex: 1}}
                
            />

            <WView style={{flexDirection: 'row', alignItems: 'flex-end', paddingBottom: 5, justifyContent: 'space-between', paddingHorizontal: 10}}>
                <WView style={{flexGrow: 1, paddingVertical: 5,  maxWidth: 330, position: 'relative'}}>
                    <WView style={{position: 'absolute', bottom: 18, left: 15, zIndex: 4, width: 24, height: 24}}>
                        <SmileyIcon />
                    </WView>
                    <TextInput 
                        multiline
                        onChangeText={setChatValue}
                        defaultValue={chatValue}
                        onSubmitEditing={handleSubmit}
                        placeholder="Message"
                        placeholderTextColor={appColor.text_color_2}
                        style={{fontSize: 18, color: appColor.text_color_1, minHeight: 50, maxHeight: 200, fontFamily: fonts.roman, borderRadius: 20, paddingLeft: 50, paddingRight: 50, backgroundColor: appColor.dark_blue_50, elevation: 2, width: '100%'}}
                    />
                    <WView style={{position: 'absolute', flexDirection: 'row', bottom: 18, right: 15, zIndex: 4,}}>
                        <WView style={{width: 24, height: 24, justifyContent: 'flex-end'}}>
                            <PaperclipIcon />
                        </WView>
                        {
                            chatValue.length == 0 &&
                            <WView style={{width: 24, height: 24, marginLeft: 15}}>
                                <CameraIcon />
                            </WView>
                        }
                    </WView>

                </WView>

                <WView onTouchEnd={() => chatValue.length > 0 ? handleSubmit() : null} style={{width: 50, borderRadius: 50,  height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: appColor.green_100, elevation: 3}}>
                    {
                        chatValue.length > 0 ?
                        <WView style={{width: 22, height: 22}}>
                            <SendIcon />
                        </WView>
                        :
                        <MicIcon />
                    }
                </WView>
            </WView>
        </WView>
    )
});

export default ChatRoute