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

var ImageCapInsetsExample = require('./me_new.png');

var MyCell=React.createClass({

    getDefaultProps(){
      return{
          leftIconName:'',
          leftTitle:'',
          rightIconName:'',
          rightTitle:'',
      }
    },

    render(){
        return(
            <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:this.props.leftIconName}} style={styles.leftImgStyle}></Image>
                  <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    {this.rightSubView()}
                </View>
            </View>
            </TouchableOpacity>
        );
    },
    //右边的内容
    rightSubView(){
        return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.renderRightContent()}
                {/*箭头*/}
                <Image source={require('./icon_cell_rightarrow.png')} style={{width:8,height:13,marginRight:8,marginLeft:8}}></Image>
            </View>
        )
    },
    //右边具体返回的值
    renderRightContent(){
        if(this.props.rightIconName.length==0){//不返回图片
            return(
                <Text style={{color:'grey'}}>{this.props.rightTitle}</Text>
            )
        }else{//返回图片
            return(
                <Image source={require('./me_new.png')} style={{width:24,height:13}}></Image>
            )
        }
    }
});



const styles=StyleSheet.create({
    container:{
        //主轴方向
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        //垂直居中
        alignItems:'center',
        height:64,
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,

    },
    item:{
        textAlign:'center',
        fontSize:28,
        margin:10,
    },
    leftViewStyle:{
     //主轴方向
        flexDirection:'row',
        //侧轴居中
        alignItems:'center',
        marginLeft:8,
    },
    rightViewStyle:{

    },
    leftImgStyle:{
        width:24,
        height:24,
        //圆角
        borderRadius:12,
        marginRight:6
    },
    leftTitleStyle:{
        fontSize:16,
    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=MyCell;
