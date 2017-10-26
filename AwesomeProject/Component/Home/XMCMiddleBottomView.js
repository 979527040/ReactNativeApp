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
//导入外部json数据
var Home_D4=require('../../LocalData/XMG_Home_D4.json');
var CommonView=require('./XMCMiddleCommonView');
var ShopCenter=require('./XMCShopCenter');
var BottomView=React.createClass({
    render(){
        return(
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}></View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
                {/*购物中心*/}
                <ShopCenter
                />
            </View>
        );
    },
    //下部分的所有子组件
    renderBottomItem(){
        //定义一个组件数组
        var itemArr=[];
        //拿到对应数据
        var dataArr=Home_D4.data;
        //遍历
        for(var i=0;i<dataArr.length;i++){
            //取出单独的数据
            var itemData=dataArr[i];
            //创建组件装入数组
            itemArr.push(
                <CommonView key={i}
                            title={itemData.maintitle}
                            subTitle={itemData.deputytitle}
                            rightIcon={this.dealWithImgUrl(itemData.imageurl)}
                            titleColor={itemData.typeface_color}
                />
            );
        }
        //返回组件数组
        return itemArr;
    },

    //处理图像尺寸
    dealWithImgUrl(url){
        if(url.search('w.h')==-1){//没有找到，正常返回
            return url;
        }else{
            return url.replace('w.h','120.90');
        }
    }
});



const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        marginTop:15,
    },
    topViewStyle:{

    },
    bottomViewStyle:{
     flexDirection:'row',
        flexWrap:'wrap',
    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=BottomView;
/**
 * Created by Administrator on 2017/9/15.
 */
