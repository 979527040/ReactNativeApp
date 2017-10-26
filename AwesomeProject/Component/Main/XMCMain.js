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
    Platform,    //判断当前运行的系统
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
/*导入外部的组件类*/
import TabNavigator from 'react-native-tab-navigator';
var Home=require('../Home/XMCHome');
var Mine=require('../Mine/XMCMine');
var Shop=require('../Shop/XMCShop');
var More=require('../More/XMCMore');

var Main=React.createClass({
    //初始化函数，变量是可以改变的，充当状态机
    getInitialState(){
        return {
            selectedTab:'home'//默认是第一个
        }
    },

    render(){
        return(
            <TabNavigator>
                {/*首页*/}
                {this.renderTabBarItem("首页",'icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
                {/*商家*/}
                {this.renderTabBarItem("商家",'icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
                {/*我的*/}
                {this.renderTabBarItem("我的",'icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
                {/*更多*/}
                {this.renderTabBarItem("更多",'icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}

            </TabNavigator>
        );
    },
    //每一个tabbarItem
    renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName,component,badgeText){
        return(
            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={require('./icon_tabbar_homepage.png')} style={styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={require('./icon_tabbar_homepage_selected.png')} style={styles.iconStyle}  />}
                onPress={()=>{this.setState({ selectedTab: selectedTab })}}
                selected={this.state.selectedTab===selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText={badgeText}
            >
                <Navigator.Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{
                      return Navigator.Navigator.SceneConfigs.PushFromRight;
                      }}
                    renderScene={(route,navigator)=>{
                      let Component=route.component;
                      return <Component{...route.passProps} navigator={navigator}/>;
                      }}
                />
            </TabNavigator.Item>
        )
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
    iconStyle:{
        width:Platform.OS==='ios'?30:25,
        height:Platform.OS==='ios'?30:25,
    },
    selectedTitleStyle:{
        color:"orange",
    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=Main;
