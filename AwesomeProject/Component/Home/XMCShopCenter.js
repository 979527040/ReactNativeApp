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
//引入外部组件类
var CommonCell=require('./XMCBottomCommonCell');
//引入外部json数据
var Home_D5=require('../../LocalData/XMG_Home_D5.json');
var ShopCenter=React.createClass({
    getDefaultProps(){
      //回调函数
        return{
            popTopHomeView:null,
        }
    },
    render(){
        return(

            <View style={styles.container}>
                {/*上部分*/}
                <CommonCell
                leftIcon="gw"
                    leftTitle="购物中心"
                rightTitle={Home_D5.tips}
                />
                {/*下部分*/}
                <ScrollView style={styles.scrollViewStyle}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>

        );
    },
    //返回下部分所有的Item
    renderAllItem(){
        //定义组件数组
      var itemArr=[];
        //取出数据
        var dataArr=Home_D5.data;
        //遍历
        for(var i=0;i<dataArr.length;i++){
            //取出单个数据
            var itemData=dataArr[i];
            //创建组件装入数组
            itemArr.push(
                <ShopCenterBottom
                shopImage={itemData.img}
                shopSale={itemData.showtext.text}
                shopName={itemData.name}
                detailurl={itemData.detailurl}
                key={i}
                popTopShopCenter={(url)=>this.popTopHome(url)}
                />
            )
        }
        return itemArr;
    },
    popTopHome(url){
        //判断
        if(this.props.detailurl==null)return;
        //执行回调函数
        this.props.popTopHomeView(url);
    }

});

var ShopCenterBottom=React.createClass({
     getDefaultProps(){
         return{
             shopImage:'',
             shopSale:'',
             shopName:'',
             detailurl:'',
             popTopShopCenter:null,

         }
     },
    render(){
        return(
            <TouchableOpacity onPress={()=>this.clickItem(this.props.detailurl)}>
            <View style={styles.itemViewStyle}>
                <Image source={{uri:this.props.shopImage}} style={styles.imageStyle}/>
                <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
            </View>
            </TouchableOpacity>
        );
    },
    clickItem(url){
        //判断
        if(this.props.detailurl==null)return;
        //执行回调函数
        this.props.popTopShopCenter(url);
    }

});

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    imageStyle:{
        width:120,
        height:100,
        borderRadius:8,

    },
    scrollViewStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10,
    },
    itemViewStyle:{
        margin:8,

    },
    shopSaleStyle:{
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'red',
        color:'white',
        padding:3,
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
    },
    shopNameStyle:{
        textAlign:'center',
        marginTop:5,
    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=ShopCenter;
/**
 * Created by Administrator on 2017/9/15.
 */
