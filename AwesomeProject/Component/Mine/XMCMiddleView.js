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
TouchableOpacity,
} from 'react-native';

/*导入外部json数据*/
var MiddleData=require('./MiddleData.json');
var MineMiddleView=React.createClass({
    render(){
        return(
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    },
    renderAllItem(){
     //定义一个组件数组
        var itemArray=[];
        //遍历
        for(var i=0;i<MiddleData.length;i++){
            //取出数据
            var data=MiddleData[i];
            //创建组件装入数组
            itemArray.push(
                <InnerView key={i} iconName={data.iconName} title={data.title}/>
            );
        }
        //返回
        return itemArray;
    }
});

var InnerView=React.createClass({

    getDefaultProps(){
      return{
          iconName:'',
          title:''
      }
    },
    render(){
        return(
            <View style={{height:55,flexDirection:'column',alignItems:'center',justifyContent:'center',}}>
                <Image source={{uri:this.props.iconName}} style={{width:30,height:20}}></Image>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
});

const styles=StyleSheet.create({
    container:{
        //设置主轴方向
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
    },
    item:{
        textAlign:'center',
        fontSize:28,
        margin:10,
    },
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=MineMiddleView;
