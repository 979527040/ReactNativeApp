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

var CommonView = require('./XMCMiddleCommonView');
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
//引入外部数据
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');
var HomeMiddleView = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    },
    //左边View
    renderLeftView(){
        //拿到对应的数据
        var data = TopMiddleData.dataLeft[0];

        return (
            <View style={styles.leftViewStyle}>
                <Image source={{uri:data.img1}} style={styles.leftImgStyle}/>
                <Image source={{uri:data.img2}} style={styles.leftImgStyle}/>
                <Text style={{color:'grey'}}>{data.title}</Text>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <Text style={{color:'blue',marginRight:5}}>{data.price}</Text>
                    <Text style={{color:'orange',backgroundColor:'yellow'}}>{data.sale}</Text>
                </View>
            </View>
        );
    },
    //右边View
    renderRightView(){
        //组件数组
        var itemArr = [];
        //取出具体数据
        var rightData = TopMiddleData.dataRight;
        //遍历
        for (var i = 0; i < rightData.length; i++) {
            //取出单独的数据
            var data = rightData[i];
            itemArr.push(
                <CommonView
                    key={i}
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}
                />
            );
        }
        //返回组件数组
        return itemArr;
    }

});


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    item: {
        textAlign: 'center',
        fontSize: 28,
        margin: 10,
    },
    leftViewStyle: {
        width: ScreenWidth * 0.5,
        height: 119,
        backgroundColor: 'white',
        //水平居中
        alignItems: 'center',
        marginRight: 1,
        justifyContent: 'center',
        borderRightColor: '#e8e8e8',
        borderRightWidth: 1
    },
    leftImgStyle: {
        width: 120,
        height: 30,
        //内容模式
        resizeMode: 'contain'
    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports = HomeMiddleView;
/**
 * Created by Administrator on 2017/9/15.
 */
