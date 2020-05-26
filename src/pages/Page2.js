import React from 'react'
import {View,Text,TouchableOpacity,} from 'react-native'
import {inject,observer} from 'mobx-react/native';
import WebView from  'react-native-webview'


@inject('AppStore')
@observer
export default class Page2 extends React.Component{

    render(){
        return(

            <View style={{flex:1}}>
                <WebView
                    ref={ref => this.web = ref}
                    style={{ flex: 1 }}
                    source={{uri: 'http://123.57.35.75:9666/cw_run?run_from_design=false&is_run=true&space_id=clause-078bc6aa-877d-4b9b-a154-a09d54de54f9&user_id=d66cdad7-d251-4665-88f3-d7c3626001b1&token=d46ff0c225b1193a11c6608c8d6de086b80691df5010aa1d7478ca071d074c0192911f12f596475df548ee1d8db715e2&nick_name=&space_auth=null&screen_id=1'}}/>
            </View>

            // <View>
            //     <Text>page2</Text>
            //     <Text>{this.props.AppStore.token}</Text>
            //     <TouchableOpacity style={{width:50,height:50,backgroundColor:'#f00'}}
            //         onPress={()=>{
            //             this.props.AppStore.updateLoginStatus(!this.props.AppStore.isLoginState)
            //         }}>
            //         <Text>更改登陆状态</Text>
            //     </TouchableOpacity>
            // </View>
        );
    };
}