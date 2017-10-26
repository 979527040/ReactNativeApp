import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    ScrollView,
    Text,
    View,
    ListView,
    TouchableHighlight,
    RecyclerViewBackedScrollView,
    TextInput,
    FlatList,
TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

var CommonView=React.createClass({
    getDefaultProps(){
      return{
          title:'',
          subTitle:'',
          rightIcon:'',
          titleColor:'',
          //回调函数
          callBackClickCell:null,
      }
    },
    render(){
        return(
            <TouchableOpacity onPress={()=>alert('点击我')}>
            <View style={styles.container}>
                {/*左边*/}
                <View>
                    <Text style={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                    <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                </View>
                {/*右边*/}
                <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43,resizeMode:'contain'}}/>
            </View>
            </TouchableOpacity>
        );
    }
});



const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:ScreenWidth*0.5-1,
        height:60,
        flexDirection:'row',
        marginBottom:1,
        marginRight:1,
        alignItems:'center',
        justifyContent:'space-around',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
        borderRightColor:'#e8e8e8',
        borderRightWidth:1
    },

    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
    },
    subTitleStyle:{
      color:'grey',
    }
})
//输出组件类
module.exports=CommonView;
/**
 * Created by Administrator on 2017/9/15.
 */
