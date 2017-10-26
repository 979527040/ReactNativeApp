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
} from 'react-native';

var MyCell=require('./XMCCommonMyCell');
var MiddleView=require('./XMCMiddleView');
var XMCHeaderView=require('./XMCHeaderView');
var Mine=React.createClass({
    render(){
        return(
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <View>
                <XMCHeaderView
                 iconName="new_friend"
                 name="朱尊龙"
                 rightIconName="icon_cell_rightarrow"
                />
                </View>
                <View style={{marginTop:5}}>
                    <MyCell
                        leftIconName="new_friend"
                        leftTitle="我的订单"
                        rightIconName=""
                        rightTitle="查看全部订单">
                    </MyCell>
                </View>
                <MiddleView/>
                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="draft"
                        leftTitle="小马哥钱包"
                        rightIconName=""
                        rightTitle="账户余额：">
                    </MyCell>
                    <MyCell style={{marginTop:20}}
                        leftIconName="like"
                        leftTitle="抵用券"
                        rightIconName=""
                        rightTitle="10张">
                    </MyCell>
                    <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="new_friend"
                        leftTitle="我要合作"
                        rightIconName=""
                        rightTitle="">
                    </MyCell>
                        </View>
                    <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="card"
                        leftTitle="积分商城"
                        rightTitle="">
                    </MyCell>
                    </View>
                    <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="pay"
                        leftTitle="今日推荐"
                        rightTitle=""
                        rightIconName="like"
                    >
                    </MyCell>
                        </View>
                </View>
            </ScrollView>
        );
    }
});



const styles=StyleSheet.create({
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
    scrollViewStyle:{
        backgroundColor:'#e8e8e8'
    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=Mine;
