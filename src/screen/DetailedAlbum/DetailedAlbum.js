import React,{Component} from 'react'
import {View,Text,FlatList,TouchableOpacity,Image,StyleSheet} from 'react-native'
import {getAlbum,getImages} from '../../Services/api'
import { normalize, vh,vw } from '../../utils/Dimension';
import Gallery from 'react-native-image-gallery';
import {styles} from './styles'


export default class DetailedAlbum extends Component{
    constructor(props){
        super(props);
        this.state={
            albums:[],
            albumId:'',
            imagesArray:[],
            toggleGallery:false,
            imageUrl:''
        }
    }

    async componentDidMount(){
        this.props.navigation.setOptions({title: this.props.route.params.title})
        this.setState({albumId:this.props.route.params.albumId})
        let res = await getAlbum(this.props.route.params.id);
        this.setState({albums:res})
        this.getImages(this.props.route.params.albumId)
    }
    getImages = async (id) => {
        let res = await getImages(id);
        this.setState({imagesArray:res})
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <FlatList
                    data={this.state.albums}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom:vh(100)}}
                    renderItem={({item})=>(
                        <TouchableOpacity 
                        onPress={()=>this.setState({albumId:item.id},()=>this.getImages(item.id))}
                        style={{marginBottom:vh(20)}}>
                        <View style={styles.leftContent}>
                            <Text>Didn't get image{'\n'}</Text>
                        </View>
                            <Text style={{marginLeft:vw(5)}}>Album {item.id}</Text>
                        </TouchableOpacity>
                    )}
                    />
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>
                        Album {this.state.albumId}
                    </Text>
                    <FlatList
                    data={this.state.imagesArray}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom:vh(100)}}
                    numColumns={2}
                    renderItem={({item})=>(
                        <TouchableOpacity 
                        onPress={()=>this.setState({imageUrl:item.url},()=>this.setState({toggleGallery:true}))}
                        style={{marginLeft:vw(2),marginBottom:vh(2)}}>
                            <Image
                            source={{uri:item.url}}
                            style={{height:vh(90),width:vw(110)}}
                            />
                        </TouchableOpacity>
                    )}
                    />
                </View>
               {
               this.state.toggleGallery&&
               <View style={{position:"absolute",top:0,left:0,right:0,bottom:0}}>
                <TouchableOpacity 
                onPress={()=>this.setState({toggleGallery:false})}
                style={styles.galleryCloseBtn}>
                    <Text style={{fontSize:normalize(18),padding:normalize(10)}}>Close</Text>
                </TouchableOpacity>
                <Gallery
                style={{ flex: 1, backgroundColor: 'black'}}
                images={[
                { source: { uri: this.state.imageUrl } },
                ]}
                />
                </View>
                }
            </View>
        );
    }
}

