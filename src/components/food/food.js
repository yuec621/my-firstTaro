import Taro, {
  Component
} from '@tarojs/taro';
import {
  View,
  Text,
  Image
} from '@tarojs/components';
import {
  AtTabs,
  AtTabsPane
} from 'taro-ui';
import Cata from './cata';
import FoodList from './foodlist';
import './food.less';
class Food extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      foodlist: [],
      currentList: []


    };
  }
  changeTab(value) {
    this.setState({
      current: value
    })
  }
  // 切换分类
  changeCata(selectCata) {
    if (this.state.foodlist.some(item => item.pid === selectCata.id)) {
      //不需要加载数据
      this.setState({
          currentList: this.state.foodlist.filter(item => item.pid === selectCata.id)
          })
      }
      else {
        //需要加载数据
        this.setState({
          foodlist: this.state.foodlist.concat(this.getData(selectCata))
        }, () => {

        });
      }
    }
    getData(selectCata) {
      let count = Math.round(Math.random() * 2);
      let imgUrl = `../../images/img/${count}.jpg`;
      return Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({
        img: imgUrl,
        pid: selectCata.id,
        id: selectCata.id + "_" + k,
        title: "分类" + selectCata.id + "菜品" + (k + 1)
      }))
      return []
    }
    render() {
      const tabList = [{
          title: '点菜'
        },
        {
          title: '评价'
        },
        {
          title: '商家'
        }

      ]

      let {
        current,
        currentList

        // tabList
      } = this.state;
      return (

        <
        AtTabs swipeable = {
          false
        }
        onClick = {
          this.changeTab.bind(this)
        }
        current = {
          current
        }
        tabList = {
          tabList
        } >
        <
        AtTabsPane current = {
          current
        } >
        <
        View className = 'food-body' >
        <
        Cata onchangeCata = {
          this.changeCata.bind(this)
        } > < /Cata>  <
        FoodList currentList = {
          currentList
        } > < /FoodList> <
        /View> <
        /AtTabsPane> <
        AtTabsPane current = {
          current
        } >
        <
        View className = 'tab-content' > 标签页二的内容 < /View> <
        /AtTabsPane> <
        AtTabsPane current = {
          current
        } >
        <
        View className = 'tab-content' > 标签页三的内容 < /View> <
        /AtTabsPane>

        <
        /AtTabs>
        //  <AtTabs current={current} onClick={this.changeTab.bind(this)} tabList={[{title:"点菜"},{title:"商家"},{title:"评价"}]}>

        //  </AtTabs>

      )
    }
  }

  export default Food;
