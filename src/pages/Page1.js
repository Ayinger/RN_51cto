import React from 'react'
import {View,Text,TouchableOpacity,BackHandler,ToastAndroid,InteractionManager} from 'react-native'
import {inject,observer} from 'mobx-react/native';
import {observable} from 'mobx'

@inject('AppStore')
@observer
export default class Page1 extends React.Component{

    @observable
    index = 1;

    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress',this.onBackAndroid)
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    /**
     * 解决android返回键问题
     * @returns {Promise.<boolean>}
     */
    onBackAndroid = async () =>{
        await InteractionManager.runAfterInteractions();
        const {navigator} = this.props;
        const routers = navigator.getCurrentRoutes();
        if(routers.length > 1){
            navigator.pop();
            return true;
        }else {
            if(this.lastBackPress && this.lastBackPress + 2000 >= Date.now()){
                navigator.popN(routers.length);
                BackHandler.exitApp();
                return true;
            }
            this.lastBackPress =  Date.now();
            ToastAndroid.show("再按一次退出应用",1000);
            return true;
        }
    }

    render(){
        return(
            <View>
                <Text>page1=========={this.index}</Text>
                <Text>page1=========={this.props.AppStore.token}</Text>
                <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                        id: 'page2'
                    })
                }}>
                    <Text>跳转到page2</Text>
                </TouchableOpacity>
            </View>
        );
    };
}