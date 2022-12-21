import {StyleSheet} from 'react-native'
import { normalize, vh,vw } from '../../utils/Dimension';


export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row"
    },
    leftContainer:{
        flex:1,
        borderRightColor:"lightgrey",
        borderRightWidth:1,
        alignItems:"center",
        paddingTop:vh(24)
    },
    leftContent:{
        height:vh(75),
        width:vh(75),
        backgroundColor:"#ADD",
        borderRadius:normalize(10),
        justifyContent:"center",
        alignItems:"center"
    },
    rightContainer:{
        flex:2,
        paddingLeft:vw(12)
    },
    title:{
        fontSize:normalize(22),
        fontWeight:"bold",
        marginTop:vh(24),
        marginBottom:vh(10)
    },
    galleryCloseBtn:{
        backgroundColor:"white",
        position:"absolute",
        top:vh(10),
        left:vw(10),
        zIndex:1,
        borderRadius:normalize(10)
    }
})