import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    ImageBackground
} from 'react-native';
import axios from 'axios'
import _ from 'lodash'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    }, {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item'
    }, {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item'
    },
];

const Item = ({title, uri}) => (
    <ImageBackground source={
            {uri: uri}
        }
        style={
            styles.imageBackground
    }>

        <Text> {title}</Text>

    </ImageBackground>
);


const ListView = () => {

    const [list, setList] = React.useState([])


    const renderItem = ({item}) => (
        <Item title={
                item.title
            }
            uri={
                item.uri
            }/>
    );

    const get_list = () => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`).then(res => {
            const data = res.data
           const list = _.map(data, rs => {
                return {id: _.toString(rs.id), title: rs.title, uri: rs.thumbnailUrl}
            })
            setList(list)
        })
    }
    React.useEffect(() => {
        get_list();
    }, []);

    return (
        <SafeAreaView style={
            styles.container
        }>
            <FlatList data={list}
                renderItem={renderItem}
                keyExtractor={
                    item => item.id
                }/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32
    }
});

export default ListView;
