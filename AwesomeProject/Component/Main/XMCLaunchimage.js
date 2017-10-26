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
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
/*导入外部组件*/
var Main=require('./XMCMain');
var Launchimage=React.createClass({
    render(){
        return(
           <Image source={require('./launchimage.png')} style={styles.launchStyle}/>
        );
    },
    //复杂操作，定时器网络请求
    componentDidMount(){
        //定时：每隔2秒切换到主页
        setTimeout(()=>{
            //跳转到主页面
            this.props.navigator.replace({
               component:Main,
            });
        },1000);
    },

    pushToDetail(){
        this.props.navigator.push({
                component: HomeDetail,//要跳转的版块
                title: '详情页'
            }
        );
    }

});



const styles=StyleSheet.create({
    launchStyle:{
        flex:1,

    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=Launchimage;
/**
 * Created by Administrator on 2017/9/15.
 */
