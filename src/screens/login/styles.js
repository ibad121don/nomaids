import {StyleSheet} from 'react-native';
import { COLOR, hp, wp } from '../../assets/enum/styleGuide';

 
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
    
  },
  imageCard:{
    width:wp(100),
    height:hp(15),
    justifyContent:'center',
    alignItems:'center'
  },
logo:{
    width:wp(52),
    height:hp(4), 
     
},
maincard:{
    height:hp(10)
},
loginSinup:{
    width:wp(46),
    height:hp(3.2), 
 
     
},
headerText:{
    color:COLOR.grey2,
    fontSize:16,
    marginTop:5
},
textbtn:{
    fontSize:18,
},
input:{
    width:wp(90),
    borderBottomWidth:1,
    marginBottom:20,
    justifyContent:'center',
    height:hp(10),
    borderBottomColor:COLOR.grey2
},
inputCard:{
    backgroundColor:'transparent',width:wp(90)
},
phoneText:{
    color:COLOR.grey2,fontSize:12
},
headerText1:{
    marginTop:20,
    fontSize:13,color:COLOR.grey2
},
orView:{
height:hp(10),
width:wp(90),
justifyContent:'center',
alignItems:'center'
},
or:{color:'black',fontSize:18}
});
export default styles;
