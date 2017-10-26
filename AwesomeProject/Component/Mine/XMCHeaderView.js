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

import {Dimensions} from 'react-native'

const deviceH = Dimensions.get('window').height;
const deviceW = Dimensions.get('window').width;
var HeaderView=React.createClass({

    getDefaultProps(){
        return{
            iconName:'',
            name:'',
            rightIconName:''
        }
    },

    render(){
        return(
            <View style={{backgroundColor:'rgba(255,96,0,1.0)'}} >
                {this.renderTopView()}
                {this.renderBottomView()}
            </View>
        );
    },
    //顶部布局视图
    renderTopView(){
        return(
            <View style={styles.HeaderViewStyle}>
                <Image source={{uri:this.props.iconName}} style={{width:60,height:60, borderRadius:50,marginLeft:20}}></Image>
                <Text style={{color:'white',fontSize:18,marginLeft:10}}>{this.props.name}</Text>
                <Image source={{uri:this.props.rightIconName}} style={{width:8,height:13,position:'absolute',right:10}}></Image>
            </View>
        )
    },

    //底部布局视图
    renderBottomView(){
        return(
            <View style={styles.Top_BottomStyle}>
                {this.renderBottomItem()}
            </View>
        )
    },
    renderBottomItem(){
        var itemArr=[];
        var data=[{'number':'100','title':'点券'},{'number':'12','title':'评价'},{'number':'100','title':'收藏'}]
         for(var i=0;i<data.length;i++){
             //取出单独的数据
             var item=data[i];
             itemArr.push(
                 <View key={i} style={styles.bottomItemStyle}>
                    <Text style={{color:'white'}}>{item.number}</Text>
                     <Text style={{color:'white'}}>{item.title}</Text>
                 </View>
             );
         }
        return itemArr;
    },

});


const styles=StyleSheet.create({
    HeaderViewStyle:{
        flexDirection:'row',
        height:100,
        alignItems:'center',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    item:{
        textAlign:'center',
        fontSize:28,
        margin:10,
    },
    Top_BottomStyle:{
        flexDirection:'row',
        //绝对定位
    },
    bottomItemStyle:{
        width:deviceW/3,
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',
        //绝对定位
        justifyContent:'center',
        alignItems:'center',
        //设置border
        borderRightWidth:1,
        borderRightColor:'white'
    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=HeaderView;
/**
 * Created by Administrator on 2017/9/15.
 */
