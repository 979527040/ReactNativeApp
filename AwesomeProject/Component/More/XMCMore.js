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

/*引入外部组件*/
var CommonCell=require('./XMCCommonCell');

var More=React.createClass({
    render(){
        return(
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop:20}}>
                        <CommonCell
                        title="扫一扫"
                        isSwitch={false}
                        />
                    </View>
                    <View>
                        <CommonCell
                            title="省流量模式"
                            isSwitch={true}
                        />
                    </View>
                    <View>
                        <CommonCell
                            title="精品应用"
                            isSwitch={false}
                        />
                    </View>
                    <View>
                        <CommonCell
                            title="清空缓存"
                            isSwitch={false}
                            rightTitle="1.44M"
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="支付帮助"
                            isSwitch={false}
                        />
                    </View>
                    <View >
                        <CommonCell
                            title="售后服务"
                            isSwitch={false}
                        />
                    </View>
                    <View >
                        <CommonCell
                            title="流量统计"
                            isSwitch={false}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },

    renderNavBar(){
        return(
            <View style={styles.navOutStyle}>
                <Text style={styles.moreStyle}>更多</Text>
                <TouchableOpacity onPress={()=>{alert('点击了')}} style={styles.rightImgStyle}>
                <Image source={require('./icon_mine_setting.png')} style={styles.navImageStyle}></Image>
                </TouchableOpacity>
            </View>
        )
    }
});



const styles=StyleSheet.create({
    moreStyle:{
      fontSize:18,
        color:'white'
    },
    container:{
        flex:1,
        backgroundColor:'#e8e8e8',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
    },
    item:{
        textAlign:'center',
        fontSize:28,
        margin:10,
    },
    rightImgStyle:{
        position:'absolute',
        right:10
    },
    navImageStyle:{
        width:24,
        height:24,
    },
    navOutStyle:{
        height:60,
        backgroundColor:'rgba(255,96,0,1.0)',
        //主轴方向
        flexDirection:'row',
        //垂直居中，，设置侧轴方向
        alignItems:'center',

        //设置主轴的对齐方式
        justifyContent:'center'
    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=More;
/**
 * Created by Administrator on 2017/9/15.
 */
