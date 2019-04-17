import Taro,{Component} from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
import './top.less'
class Top extends Component{
     render(){
        return(<view className="top">
        <View className="left">
        <Image className="img" src={require("../../images/img/left.png")}/>
        </View>
        <View className="right">
        <Image className="img" src={require("../../images/img/search.png")}/>
        <Image className="img" src={require("../../images/img/collect.png")}/>
        <Image className="img" src={require("../../images/img/team.png")}/>A
        <Image className="img" src={require("../../images/img/lue.png")}/>
        </View>
        </view>)
    }
}

export default Top;