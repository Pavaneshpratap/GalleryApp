import {StyleSheet} from 'react-native'
import { normalize, vh, vw } from '../../utils/Dimension';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:vw(21),
        paddingTop:vh(2)
    },
    title:{
        fontSize:normalize(22),
        fontWeight:'bold',
        marginTop:vh(24),
        marginBottom:vh(8)
    },
    btnContainer:{
        marginRight:vw(11),
        marginBottom:vh(10)
    },
    content:{
        height:vh(128),
        width:vw(155),
        padding:normalize(5),
        backgroundColor:"#ADD",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:normalize(10)
    }
})