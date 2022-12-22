import React, {Component} from 'react';
import {View, Text, FlatList,TouchableOpacity,ScrollView} from 'react-native';
import {getUsers,getAlbum} from '../../Services/api'
import {styles} from './styles'
import PieChart from 'react-native-pie-chart';
import { normalize, vh, vw } from '../../utils/Dimension';

const sameColor = []
const someArray = []
export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            userData:[],
            allIds:[],
            chartLength:[],
            randomColor:[]
        }
    }
   async componentDidMount(){
        let res = await getUsers()
        this.setState({userData:res})
        let result = this.state.userData.map(a => a.id);
        this.setState({allIds:result})
        this.state.userData.map(async a => {
          let respo = await getAlbum(a.id);
          someArray.push(respo.length)
          // console.warn("all response",this.state.chartLength);
        });
        for(var i = 0; i < this.state.allIds.length; i++){
          sameColor.push("#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase());
          // console.warn("slice",sameColor);
        }
        setTimeout(()=>{
        // console.warn("ow",someArray);
        this.setState({chartLength:someArray,randomColor:sameColor})
            },1000)
    

        
    }
  render() {

    const widthAndHeight = 200
    const series = [50,50,50,50,50,50,50,50,50,50]
    const sliceColor = ['#DF5E43','#DFC543','#8CDF43','#43DFAF','#439DDF','#3D336A','#C75CD8','#AD257B','#B10836','#200505']

    return (
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
        onPress={()=>console.warn("cdc",this.state.chartLength)}
          style={styles.title}>
          People
        </Text>
        <FlatList
          data={this.state.userData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('Album',{title:item.name,id:item.id})}
              style={styles.flatlistContainer}>
                <Text style={styles.flatlistTitle}>
                    {item.name}
                </Text>
                <Text style={styles.flatlistContent}>
                    {item.email}
                </Text>
                <Text style={styles.flatlistContent}>
                    {item.phone}
                </Text>
                <View style={styles.separator}/>
                <View style={styles.flatlistBottomView}>
                    <Text style={styles.flatlistContent}>{item.company.name}</Text>
                    <Text style={styles.flatlistContent}>25</Text>
                </View>
            </TouchableOpacity>
          )}
        />
        <View style={{marginTop:vh(20)}}>
          <Text style={[styles.title,{marginBottom:vh(10)}]}>Analytics</Text>
          <View style={{backgroundColor:"white"}}>
          <Text style={[styles.title,{textAlign:"center",marginBottom:vh(10)}]}>People</Text>
          <View style={{flexDirection:"row",paddingTop:vh(20),justifyContent:"space-between",width:"100%",backgroundColor:"white",paddingHorizontal:vw(10)}}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={this.state.chartLength.length<1?series:this.state.chartLength}
            sliceColor={this.state.randomColor.length<1?sliceColor:this.state.randomColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
          <View style={{flexDirection:"row"}}>
          <FlatList
          data={sameColor}
          renderItem={({item})=>(
            <View style={{height:vh(20),marginBottom:vh(2)}}>
              <View style={{height:vh(20),width:vh(20),backgroundColor:item,borderRadius:vh(10),marginBottom:vh(2)}}/>
            </View>
          )}
          />
          <FlatList
          data={this.state.allIds}
          renderItem={({item})=>(
            <View style={{height:vh(20),marginBottom:vh(2),flexDirection:"row",alignItems:"center",marginLeft:vw(10)}}>
              <Text style={{marginLeft:vw(10)}}>User {item}</Text>
            </View>
          )}
          />
          </View>
          </View>
          </View>
          </View>
      </ScrollView>
      </View>
    );
  }
}


