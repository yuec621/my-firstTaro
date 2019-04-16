import Taro,{Component} from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
import './addcut.less';
class AddCut extends Component{
    constructor(){
        super(...arguments);
        this.state={
           Num:0
         };
    }
    CutFood(){
        this.props.food
    }
    AddFood(){
        this.props.food
    }
     render(){
        return(<view className="addcut">
       <Image onClick={this.CutFood.bind(this)} className="opeate_img" src={require('../../images/img/cut.png')} />
       <Text className="food_num">{this.state.Num}</Text>
       <Image onClick={this.AddFood.bind(this) className="opeate_img" src={require('../../images/img/add.png')} />
        </view>)
    }
}

export default AddCut;