import React, {Component} from 'react';
import {View, Text, FlatList,TouchableOpacity} from 'react-native';
import {getUsers} from '../../Services/api'
import {styles} from './styles'

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            userData:[]
        }
    }
   async componentDidMount(){
        let res = await getUsers()
        this.setState({userData:res})
    }
  render() {
    return (
      <View style={styles.container}>
        <Text
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
      </View>
    );
  }
}


