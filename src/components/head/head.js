import Taro,{Component} from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
import Top from './top';
import './head.less';
import Activity from './activity';
class Head extends Component{
    constructor(){
        super(...arguments)
        this.state={
            "store":{
                title:"春香与",
                notice:"欢迎光临",
                tags:["味道不错","主食好","分量足"]
            }
        }
    }
     render(){
        let {store}=this.state;
        return(<view className="head">
            <Top></Top>
            <Image className="back" src={require('../../images/img/back.jpg')}></Image>
            <View className="store">
            <Image className="store_img" src={require('../../images/img/store.jpg')}></Image>
            
            <View className="store_text">
                <Text>{store.title}</Text>
                <Text>{store.notice}</Text>
                <View>{
                    store.tags.map((item,index)=>
                        <Text key={index} className="tags_text">{item}</Text>
                    )
                                
                }</View>
            </View>
            </View >
            <Activity></Activity>
        </view>)
    }
}

export default Head;