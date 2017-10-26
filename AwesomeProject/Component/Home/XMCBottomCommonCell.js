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
    FlatList
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var BottomCommonCell=React.createClass({
    getDefaultProps(){
      return{
          leftIcon:'',
          leftTitle:'',
          rightTitle:'',
      }
    },

    render(){
        return(
            <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                 <Image source={{uri:this.props.leftIcon}} style={{width:23,height:23}}/>
                    <Text style={{marginLeft:10,fontSize:16}}>{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <Text style={{marginRight:15,fontSize:13,color:'gray'}}>{this.props.rightTitle}</Text>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}}/>
                </View>
            </View>
        );
    }
});



const styles=StyleSheet.create({
    container:{
        width:ScreenWidth,
        height:44,
        flexDirection:'row',
        alignItems:'center',
        //设置对齐方式
        justifyContent:'space-between',
        //设置下边框
        borderTopColor:'#e8e8e8',
        borderTopWidth:0.5,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftViewStyle:{
     flexDirection:'row',
        alignItems:'center',
        marginLeft:8,

    },
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center',
    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=BottomCommonCell;
/**
 * Created by Administrator on 2017/9/15.
 */
