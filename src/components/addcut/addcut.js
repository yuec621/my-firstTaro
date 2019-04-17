import Taro,{Component} from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
import {getFoodCount,setFoodCount} from '../../utils/common';
import './addcut.less';
class AddCut extends Component{
    constructor(){
        super(...arguments);
        this.state={
           Num:0
         };
    }
    componentDidMount(){
        this.setState({Num:getFoodCount(this.props.food)})
    }
    CutFood(){
        if(this.props.food){
            if(this.state.Num>0){
                setFoodCount(this.props.food,this.state.Num,"cut",()=>{
                    this.setState({Num:getFoodCount(this.props.food)})
                });
            }else{
                console.error("当前加减菜品出现异常")
            }
        }
    }
    AddFood(){
        if(this.state.food){
            setFoodCount(this.props.food,this.state.Num,"add",()=>{
                this.setState({Num:getFoodCount(this.props.food)})
            });
    }
     render(){

        let {Num}=this.state;
        let hideClass=Num>0?"":'hide';
        return(<View className='addcut'>
       <Image onClick={this.CutFood.bind(this)} className={'opeate_img '+hideClass} src={require('../../images/img/cut.png')} />
       <Text className={'food_num '+ hideClass}>{this.state.Num}</Text>
       <Image onClick={this.AddFood.bind(this) className='opeate_img' src={require('../../images/img/add.png')} />
        </View>)
    }
}

export default AddCut;