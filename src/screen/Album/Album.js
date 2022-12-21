import React,{Component} from 'react'
import {View,Text,FlatList,TouchableOpacity} from 'react-native'
import {getAlbum} from '../../Services/api'
import {styles} from './styles'
import {vh} from '../../utils/Dimension';

export default class Album extends Component{
    constructor(props){
        super(props);
        this.state={
            albums:[]
        }
    }

    async componentDidMount(){
        this.props.navigation.setOptions({title: this.props.route.params.title})
        let res = await getAlbum(this.props.route.params.id);
        this.setState({albums:res})
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Albums</Text>
                <FlatList
                data={this.state.albums}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:vh(100)}}
                numColumns={2}
                renderItem={({item})=>(
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('DetailedAlbum',{title: this.props.route.params.title,id:this.props.route.params.id,albumId:item.id})}
                    style={styles.btnContainer}>
                    <View style={styles.content}>
                        <Text>Didn't get image{'\n'}</Text>
                        <Text>{item.title}</Text>
                    </View>
                    <Text style={{marginTop:vh(6)}}>Album {item.id}</Text>
                    <Text>{this.state.albums.length}</Text>
                    </TouchableOpacity>
                )}
                />
            </View>
        );
    }
}

