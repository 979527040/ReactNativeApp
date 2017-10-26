/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
/*导入外部的组件类*/
var LauncherImage=require('./Component/Main/XMCLaunchimage');
var Main=require('./Component/Main/XMCMain')

var MainMale=React.createClass({
  render(){
    return(
        <Navigator.Navigator
            initialRoute={{name:'启动页',component:LauncherImage}}
            configureScene={()=>{
                      return Navigator.Navigator.SceneConfigs.PushFromRight;
                      }}
            renderScene={(route,navigator)=>{
                      let Component=route.component;
                      return <Component{...route.passProps} navigator={navigator}/>;
                      }}
        />
       /* <Main/>*/
    );
  }
});

const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
    height:90
  },
  item:{
    padding:10,
    fontSize:28,
    height:74,
  },
})
AppRegistry.registerComponent('AwesomeProject',()=>MainMale);
//输出组件类
//module.exports=Main;
/*class LotofStyles extends Component{
  render(){
    return (
        <View>
        <Text style={styles.red}>设置成红色</Text>
          <Text style={styles.bigblue}>设置成蓝色</Text>
          <Text style={[styles.bigblue,styles.red]}>bigbule,ehti</Text>
        </View>
    );
  }
}
const  styles=StyleSheet.create({
  bigblue:{
    color:'blue',
    fontWeight:'bold',
    fontSize:30,
  },
  red:{
    color:'red',
  },
});*/



/*class Blink extends Component{
  constructor(props){
    super(props);
    this.state={showText:true};
    //每1000毫秒对showtext状态做一次取反操作
    setInterval(()=>{
      this.setState(previousState=>{
        return {showText:!previousState.showText};
      });
    },1000);
  }

  render(){
    //根据当前showText的值决定是否显示text内容
    let display=this.state.showText ? this.props.text:'';
    return (<Text>{display}</Text>);
  }
}

class BlinkApp extends Component{
  render(){
    return (
        <View>
          <Blink text='你好' />
          <Blink text="'我不好"/>
        </View>
    );
  }
}*/


/*class Greeting extends Component{
  render(){
    return (<Text>Hello {this.props.name}</Text>);
  }
}


class LotsOfGreetings extends Component{
  render(){
    return (
    <View style={{alignItems:'center'}}>
      <Greeting name="小明"/>
      <Greeting name="小林"/>
      </View>
    );
  }
}*/


/*class HelloWorldApp extends Component{
  render(){
    let pic={
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (<Image source={pic} style={{width: 193,height: 110}} />);
     //return  (<Text>我是天下无敌的独孤求败</Text>);

  }
}*/

/*
export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

/!*var data="nihoa";
ReactDom.render(

    <MyTitle title={data}/>,
    document.body
);*!/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  welcome: {
    fontSize: 20,
    textAlign: 'right',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

//TODO 定义一个组件类
var MyTitle=React.createClass({
  propTypes:{
    title:React.PropTypes.string.isRequired,
  },

  render:function(){
    return <h1>{this.props.title}</h1>
  }
});*/
