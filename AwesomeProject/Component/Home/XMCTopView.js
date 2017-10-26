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
var TopListView=require('./XMCTopListView');
//引入外部json数据
var TopMenu=require('./TopMenu.json')
var TopView=React.createClass({

    getInitialState(){
        return{
          activePage:0
        }
    },
    render(){
        return(
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={this.onScrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },

    //当一帧滚动结束的时候调用
    onScrollAnimationEnd(e){
        //求出当前页码
        var currentPage=Math.floor(e.nativeEvent.contentOffset.x)/Math.floor(ScreenWidth);
        //更新状态机
        this.setState({
            activePage:currentPage
        });
    },

    //ScrollView内部组件
    renderScrollItem(){
        //定义组件数组
        var itemArr=[];
        //数据数组
        var dataArray=TopMenu.data;
        //遍历创建组件
        for(var i=0;i<dataArray.length;i++){
            itemArr.push(
            <TopListView key={i}
              dataArray={dataArray[i]}
            />
            );
        }
        return itemArr;
    },

    //页码指示器
    renderIndicator(){
        //指示器数组
        var indicatorArr=[],styleCircle;
        //遍历创建组件
        for(var i=0;i<2;i++){
            //设置圆点样式
            styleCircle=(i===this.state.activePage) ? {color:'orange'} : {color:'gray'}
            indicatorArr.push(
                //圆点
                <Text key={i} style={[{fontSize:25},styleCircle]}>&bull;</Text>
            );
        }
        return indicatorArr;
    }
})



const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
    },

    indicatorViewStyle:{
        //改变主轴方向
        flexDirection:'row',
        //水平居中
        justifyContent:'center',
    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=TopView;

