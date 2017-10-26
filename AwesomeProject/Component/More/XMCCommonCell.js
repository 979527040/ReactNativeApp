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
TouchableOpacity,
Switch,
} from 'react-native';


var CommonCell=React.createClass({
    //设置title默认值
    getDefaultProps(){
        return {
            title: '',//标题
            isSwitch: false,//是否显示开关按钮
            rightTitle:'',
        }
    },
    getInitialState(){
        return {
            isOn: false,
        }
    },
    render(){
        return (
            <TouchableOpacity onPress={()=>{alert('点击')}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <Text style={{marginLeft:18}}>{this.props.title}</Text>
                    {/*右边*/}

                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },
    //cell右边显示内容
    renderRightView(){
        //判断
        if (!this.props.isSwitch) {
            //返回箭头
            return (
                //设置垂直居中和横向排列
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {this.rightTitle()}
                <Image source={require('./icon_cell_rightarrow.png')} style={{width:8,height:13,marginRight:8}}></Image>
                </View>
                    )
        } else {
            //返回开关
            return (
                <Switch value={this.state.isOn==true} onValueChange={()=>{this.setState({isOn: !this.state.isOn})}}
                        style={{marginRight:8}}></Switch>
            )
        }

    },
    rightTitle(){
        if(this.props.rightTitle.length>0){
            return(
                <Text style={{color:'grey', marginRight:3}}>{this.props.rightTitle}</Text>
            )
        }
    }

});



const styles=StyleSheet.create({
    container:{
        height:54,
        backgroundColor:'white',
        //设置下方边框阴影
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,
        flexDirection:'row',
        //主轴对齐方式,两端对齐
        justifyContent:'space-between',
        //垂直居中
        alignItems:'center',
    },
    item:{
        textAlign:'center',
        fontSize:28,
        margin:10,
    },
});
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=CommonCell;
