import {StyleSheet} from 'react-native'
import {vh, vw, normalize} from '../../utils/Dimension';

export const styles = StyleSheet.create({
    container:{
        flex: 1, 
        paddingHorizontal: vw(20),
        paddingBottom:vh(50)
    },
    title:{
        fontSize: normalize(22),
        fontWeight: 'bold',
        marginTop: vh(12),
    },
    flatlistContainer:{
        // height: vh(180),
        // paddingBottom:vh(20),
        backgroundColor: 'white',
        marginTop: vh(16),
        paddingHorizontal:vw(16),
        shadowColor:"grey",
        shadowRadius:4,
        shadowOpacity:0.5,
        shadowOffset:{width:-2,height:2}
    },
    flatlistTitle:{
        fontSize:normalize(22),
        fontWeight:"bold",
        marginTop:vh(16),
        marginBottom:vh(9)
    },
    flatlistContent:{
        fontSize:normalize(16),
        
    },
    separator:{
        height:vh(1),
        backgroundColor:"grey",
        marginTop:vh(23),
        marginBottom:vh(13)
    },
    flatlistBottomView:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:vh(10)
    }
})