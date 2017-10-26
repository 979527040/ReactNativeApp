/**
 * Created by Administrator on 2017/9/15.
 */
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


var HomeDetail=React.createClass({
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.popTopHome()}}>
                <Text style={styles.item}>HomeDetail->测试跳转</Text>
                    </TouchableOpacity>
            </View>
        );
    },
    popTopHome(){
      this.props.navigator.pop();
    }
});



const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
    },
    item:{
        textAlign:'center',
        fontSize:28,
        margin:10,
    },
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=HomeDetail;
