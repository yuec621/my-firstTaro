import Taro,{Component} from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
import AddCut from '../addcut/addcut';
import './foodlist.less';
class FoodList extends Component{
    constructor(){
        super(...arguments);
        this.state={
           
         };
    }
     render(){
        //  console.log(JSON.stringify(this.props.currentList))
        let {selectCata,currentList}=this.props;
        return(
        <view className="foodlist">
       <Text>{selectCata?selectCata.name:""}</Text>
       <view className="foodlist_forlist">
       {
           currentList.map((item,index)=>{
            return (
            
            <view key={item.id} className="foodlist_item">
            <Image className="foodlist_item_img" src={item.img==2?require('../../images/img/2.jpg'):require('../../images/img/1.jpg')}></Image>
            <View className="foodlist_item_info">
                <Text>{item.title}</Text>
                <Text>月售:{item.sole}</Text>
                <Text>Y{item.price}</Text>
                <AddCut food={item} />
            </View>
            </view>)
           }
           )
       }
       </view>
        </view>
        
        )
    }
}

export default FoodList;