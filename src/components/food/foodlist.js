import Taro,{Component} from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
class FoodList extends Component{
    constructor(){
        super(...arguments);
        this.state={
           
         };
    }
     render(){
         console.log(JSON.stringify(this.props.currentList))
        return(<view className="foodlist">
       foodlist
        </view>)
    }
}

export default FoodList;