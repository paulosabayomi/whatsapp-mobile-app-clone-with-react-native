import React from "react";
import { WText, WView } from "../../shared/themed";
import { ChatHead, RFastImage, TabsHeaderComponent } from "../../shared/ReUsables";
import useAppColor from "../../shared/useColor";

// @ts-ignore
import CameraIcon from '../../assets/icons/camera.svg'
// @ts-ignore
import MenuIcon from '../../assets/icons/menu.svg'
// @ts-ignore
import SearchIcon from '../../assets/icons/search.svg'
// @ts-ignore
import PlusIcon from '../../assets/icons/plus.svg'

import { FlatList, StyleSheet } from "react-native";
import statusUpdate from "../../shared/statusUpdate";
import contacts from "../../shared/contacts";
import { TabComponentContenxt } from "../TabComponent";

const DefaultUpdateRoute = React.memo((props: any) => {
    const appColor = useAppColor();
    const navigation = React.useContext(TabComponentContenxt).navigation
    
    const headerIcons = [
        {icon: <CameraIcon />, onPress: () => null}, 
        {icon: <SearchIcon />, onPress: () => null}, 
        {icon: <MenuIcon />, onPress: () => null}, 
    ]

    return (
        <WView isParent>
            <TabsHeaderComponent title="Updates" icons={headerIcons} />
            <FlatList 
                data={[{}]}
                // contentContainerStyle={{paddingHorizontal: 15}}
                renderItem={() => <>
                    <WView >
                        <WView style={{flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 15, marginBottom: 15}}>
                            <WText style={{fontSize: 22}} fontFamily="medium">Status</WText>
                            <MenuIcon />
                        </WView>
                        <WView style={{flexDirection: "row", paddingHorizontal: 15, marginBottom: 30, borderBottomColor: 'gray', borderBottomWidth: .4, paddingBottom: 20}}>
                            {statusUpdate.map((status, index) => 
                                <WView style={{alignItems: 'center', marginRight: 20,}}>
                                    <WView style={{width: 85, height: 85, borderWidth: 2,  borderRadius: 50, borderColor: appColor.green_100, alignItems: 'center', justifyContent: 'center'}}>
                                        <WView style={{width: 75, height: 75, borderRadius: 50, backgroundColor: index == 1 ? 'yellow' : 'lightgreen', alignItems: 'center', justifyContent: 'center'}}>
                                            <WText style={{textAlign: 'center'}}>{status.status.at(-1)!.text.split(' ').slice(0, 4).join(' ')}</WText>
                                        </WView>
                                    </WView>
                                    <WText fontFamily="light" style={{fontSize: 14, zIndex: 5}}>{contacts.find(contact => contact.id == status.user_id)?.name}</WText>

                                </WView>
                                
                            )}
                        </WView>
                    </WView>

                    <WView >
                        <WView style={{flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 15, marginBottom: 15}}>
                            <WText style={{fontSize: 22}} fontFamily="medium">
                                Channels
                            </WText>
                            <WView style={{width: 22, height: 22}}>
                                <PlusIcon />
                            </WView>
                        </WView>
                        <WView style={{ paddingHorizontal: 15, marginBottom: 30, paddingBottom: 20}}>
                            {contacts.slice(0, 3).map(contact => 
                                <ChatHead contact={contact} navigation={navigation} />
                            )}
                        </WView>
                    </WView>

                    <WView >
                        <WView style={{flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 15, marginBottom: 15}}>
                            <WText style={{fontSize: 22}} fontFamily="medium">
                                Find Channels
                            </WText>
                            <WView style={{}}>
                                <WText style={{color: appColor.green_100}}>See all</WText>
                            </WView>
                        </WView>
                        <WView style={{ marginBottom: 30, paddingBottom: 20}}>
                            <FlatList 
                                data={[{title: "Mark ZukerBerg"}, {title: "WhatsApp Updates"}, {title: 'Comedy'}, {title: 'Drama'}, {title: 'Movies'}]}
                                renderItem={(item) => 
                                    <WView style={styles.findChannels}>
                                        <WView style={{alignItems: 'center', justifyContent: 'center', marginTop: 15}}>
                                            <RFastImage style={{width: 70, height: 70, borderRadius: 60}} url="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1203.jpg" />
                                        </WView>

                                        <WView style={{marginTop: 10}}>
                                            <WText style={{textAlign: 'center', fontSize: 15}}>{item.item.title}</WText>
                                        </WView>
                                        
                                        <WView style={{alignItems: 'center', marginTop: 10}}>
                                            <WText style={{color: appColor.green_100, width: '80%', textAlign: 'center', borderRadius: 50, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: appColor.green_150}}>Follow</WText>
                                        </WView>
                                    </WView>}
                                contentContainerStyle={{paddingLeft: 20}}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </WView>
                    </WView>
                </>}
            />
        </WView>
    )
});

const styles = StyleSheet.create({
    findChannels: {
        width: 150,
        height: 170,
        borderColor: 'gray',
        borderWidth: .4,
        borderRadius: 15,
        marginRight: 15
    }
})

export default DefaultUpdateRoute;