import React, {useRef, useState} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ImageBackground,
    Modal

} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import {Linking} from 'react-native';

const {width: windowWidth} = Dimensions.get('window');

const data = [
    {
        id: '1',
        uri: 'https://i.imgur.com/GImvG4q.jpg',
        title: 'The LivingOS',
        content: 'สามารถกดเพื่อเรียกหน้าเว็บของ The LivingOS ขึ้นมาได้ '
    }, {
        id: '2',
        uri: 'https://i.imgur.com/Pz2WYAc.jpg',
        title: 'Google Map ',
        content: 'สามารถกดเพื่อเรียกใช้งาน Application Google Map ได้'
    }, {
        id: '3',
        uri: 'https://i.imgur.com/IGRuEAa.jpg',
        title: 'Full size',
        content: 'สามารถกดเพื่อดูรูปแบบ Full size ได้'
    },
];

const INITIAL_INDEX = 0;
export default function StartScreen({navigation}) {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
    const [show, setShow] = useState(false);

    function handleCarouselScrollEnd(item, index) {
        setCurrentIndex(index);
    }


    function renderItem({item, index}) {
        const {id, uri, title, content} = item;

        if (id === '1') {
            return (
                <TouchableOpacity activeOpacity={1}
                    style={
                        styles.item
                    }
                    onPress={
                        () => {
                            Linking.openURL('https://www.thelivingos.com/')
                        }
                }>
                    <ImageBackground source={
                            {uri: uri}
                        }
                        style={
                            styles.imageBackground
                    }>
                        <View style={
                            styles.rightTextContainer
                        }>
                            <Text style={
                                styles.rightText
                            }>thelivingos</Text>
                        </View>
                    </ImageBackground>
                    <View style={
                        styles.lowerContainer
                    }>
                        <Text style={
                            styles.titleText
                        }>
                            {title}</Text>
                        <Text style={
                            styles.contentText
                        }>
                            {content}</Text>
                    </View>
                </TouchableOpacity>
            );
        } else if (id === '2') {
            return (
                <TouchableOpacity activeOpacity={1}
                    style={
                        styles.item
                    }
                    onPress={
                        () => {
                            Linking.openURL('http://maps.google.com/maps')
                        }
                }>
                    <ImageBackground source={
                            {uri: uri}
                        }
                        style={
                            styles.imageBackground
                    }>
                        <View style={
                            styles.rightTextContainer
                        }>
                            <Text style={
                                styles.rightText
                            }>Google Map</Text>
                        </View>
                    </ImageBackground>
                    <View style={
                        styles.lowerContainer
                    }>
                        <Text style={
                            styles.titleText
                        }>
                            {title}</Text>
                        <Text style={
                            styles.contentText
                        }>
                            {content}</Text>
                    </View>
                </TouchableOpacity>
            );
        } else if (id === '3') {
            return (
                <View>
                    <TouchableOpacity activeOpacity={1}
                        style={
                            styles.item
                        }
                        onPress={
                            () => {
                                setShow(true)
                            }
                    }>
                        <ImageBackground source={
                                {uri: uri}
                            }
                            style={
                                styles.imageBackground
                        }>
                            <View style={
                                styles.rightTextContainer
                            }>
                                <Text style={
                                    styles.rightText
                                }>Google Map</Text>
                            </View>
                        </ImageBackground>
                        <View style={
                            styles.lowerContainer
                        }>
                            <Text style={
                                styles.titleText
                            }>
                                {title}</Text>
                            <Text style={
                                styles.contentText
                            }>
                                {content}</Text>
                        </View>
                    </TouchableOpacity>
                    <Modal transparent={true}
                        visible={show}>
                        <ImageBackground source={
                                {uri: uri}
                            }
                            style={
                                styles.imageBackground
                        }>
                            <View style={
                                styles.rightTextContainer
                            }>
                                <Text style={
                                    styles.rightText
                                }>Google Map</Text>
                            </View>
                        </ImageBackground>


                    </Modal>
                </View>
            );
        }


    }
    const onLogoutPressed = () => {
        navigation.navigate('LoginScreen')
    }
    return (
        <View style={
            styles.container
        }>
            <Carousel style={
                    styles.carousel
                }
                data={data}
                renderItem={renderItem}
                itemWidth={
                    0.7 * windowWidth
                }
                inActiveOpacity={0.3}
                containerWidth={windowWidth}
                onScrollEnd={handleCarouselScrollEnd}
                ref={carouselRef}/>

            <TouchableOpacity style={
                    styles.BtnLogout
                }

                onPress={onLogoutPressed}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        paddingVertical: 20
    },
    carousel: {
        backgroundColor: '#141518',
        aspectRatio: 1.5,
        flexGrow: 0,
        marginBottom: 20
    },
    item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        borderColor: 'white',
        elevation: 3
    },
    imageBackground: {
        flex: 2,
        backgroundColor: '#EBEBEB',
        borderWidth: 5,
        borderColor: 'white'
    },
    rightTextContainer: {
        marginLeft: 'auto',
        marginRight: -2,
        backgroundColor: 'rgba(49, 49, 51,0.5)',
        padding: 3,
        marginTop: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    rightText: {
        color: 'white'
    },
    lowerContainer: {
        flex: 1,
        margin: 10
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    contentText: {
        marginTop: 10,
        fontSize: 12
    },
    fullImage: {
        width: '100%'
    },
    BtnLogout: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#00c4eb"
    }
});
