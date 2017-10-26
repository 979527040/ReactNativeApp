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

var Dimensions=require('Dimensions');
var {width,height}=Dimensions.get('window');
/*导入外部组件类*/
var HomeDetail=require('./XMCHomeDetail');
var TopView=require('./XMCTopView');
var MiddleView=require('./XMCHomeMiddleView');
var MiddleBottomView=require('./XMCMiddleBottomView');
var ShopCenter=require('./XMCShopCenter');
var GuestYouLike=require('./XMCGuestYouLike');
var Home=React.createClass({
    render(){
        return(
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderNavBar()}
                {/*首页的主要内容*/}
                <ScrollView>
                 <TopView/>
                    {/*中间的内容*/}
                    <MiddleView/>
                    {/*中间下半部分内容*/}
                    <MiddleBottomView/>
                    {/*猜你喜欢*/}
                    <GuestYouLike/>
                </ScrollView>
            </View>
        );
    },

    //首页的导航条
    renderNavBar(){
        return(
             <View style={styles.navBarStyle}>
                 <TouchableOpacity onPress={()=>{alert('你好')}}>
                 <Text style={{color:'white'}}>广州</Text>
                 </TouchableOpacity>
                 <TextInput
                     placeholder="输入商家,品类，商圈"
                     underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线效果
                     style={styles.topInputStyle}
                 />
                 <View style={styles.rightStyle}>
                     <TouchableOpacity>
                     <Image
                         source={require('./icon_homepage_message.png')} style={styles.navrightImgStyle}
                     />
                     </TouchableOpacity>
                     <TouchableOpacity>
                     <Image
                         source={require('./icon_homepage_scan.png')} style={styles.navrightImgStyle}
                     />
                 </TouchableOpacity>
                 </View>
             </View>

        )
    },
    //跳转到购物中心详情页
    pushToShopCenterDetail(url){
        alert(url);
    },
    //跳转到二级页面

    pushToDetail(){
        this.props.navigator.push({
                component: HomeDetail,//要跳转的版块
                title: '详情页'
            }
        );
    }
});



const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8e8e8',
    },
    item:{
        textAlign:'center',
        fontSize:28,
        margin:10,
    },
    //顶部输入框样式
    topInputStyle:{
        width:width*0.75,
        height:40,
        backgroundColor:'white',
        //垂直居中，，设置侧轴方向
        alignItems:'center',
        //设置圆角
        borderRadius:10,
        paddingLeft:10
    },
    //设置图片大小
    navrightImgStyle:{
      width:30,
      height:30
    },
    //导航条样式
    navBarStyle:{
      height:60,
      backgroundColor:'rgba(255,96,0,1.0)',
        //主轴方向
        flexDirection:'row',
        //垂直居中，，设置侧轴方向
        alignItems:'center',

        //设置主轴的对齐方式
        justifyContent:'space-around'
    },
    rightStyle:{
        flexDirection:'row',
    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=Home;