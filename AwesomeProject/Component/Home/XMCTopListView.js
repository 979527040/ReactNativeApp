import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var TopListView=React.createClass({

    getDefaultProps(){
      return {
          dataArray:[]
      }
    },

    getInitialState(){
        //创建数据源
            var ds=new ListView.DataSource({rowHasChanged:(row1,row2)=>row1!==row2});
             return{
                 dataSource:ds.cloneWithRows(this.props.dataArray)
             }
    },


    render(){
        return(
           <ListView style={styles.contentViewStyle}
              dataSource={this.state.dataSource}
                     renderRow={this.renderRow}
                     contentContainerStyle={styles.contentViewStyle}
              enableEmptySections={true}
                     scrollEnabled={false}
           />
        );
    },
    //具体的cell
    renderRow(rowdata){
        return(
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri: rowdata.image}} style={{width:52, height:52}}/>
                    <Text style={styles.titleStyle}>{rowdata.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});



const styles=StyleSheet.create({

    contentViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        // 宽度
        width:ScreenWidth
    },
    cellStyle:{
        // backgroundColor:'red',
        width:70,
        height:70,
        // 水平居中和垂直居中
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        //一共五列，六个间隙，要平分六个间隙
        marginLeft:(ScreenWidth-70*5)/6,
    },

    titleStyle:{
        fontSize:12,
    }
})
//AppRegistry.registerComponent('AwesomeProject',()=>Main);
//输出组件类
module.exports=TopListView;