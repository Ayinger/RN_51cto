/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    DeviceEventEmitter,
    StyleSheet,
    InteractionManager,
    View,
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components'
import {Provider} from 'mobx-react/native'
import stores from './src/store'

import Router from './src/common/Routers'


export default class App extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            currentID: '',
        }
    }

    configureScene = route =>{
        if(route.sceneConfig) return route.sceneConfig
        return {
            ...Navigator.SceneConfigs.PushFromRight,
            //gestures:{} // 禁用左滑动返回手势
        }
    }

    renderScene = (route,navigator) =>{
      let Component = Router[route.id].default;
      return <Component navigator = {navigator} {...route.passProps}/>
    }

    /** 将要切换路由的事件方法 */
    onWillFocus = async (router) =>{
       console.log('>>>>NextRouter',router);
       if(this.state.currentID == undefined){
          this.state.currentID = router.id;
       }else {
          this.state.currentID = router.id;
       }

       //在稍后执行代码，不会延迟当前进行的动画
       await InteractionManager.runAfterInteractions();
      // DeviceEventEmitter.emit()
    }

    /** 已经切换到路由 */
    onDidFocus = async (router) => {
        await InteractionManager.runAfterInteractions();
    }






   render(){
       return (
           <View style={{backgroundColor:'#f0f',flex:1}}>
               <Provider {...stores}>
                   <Navigator
                       initialRoute={{id:'page1'}}
                       configureScene={this.configureScene}
                       renderScene={this.renderScene}
                       onWillFocus={this.onWillFocus}
                       onDidFocus={this.onDidFocus}/>
               </Provider>
           </View>

       );
   }
};

const styles = StyleSheet.create({

});

