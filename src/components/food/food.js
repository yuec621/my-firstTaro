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
@import "~taro-ui/dist/style/components/tabs.scss";
class Food extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
     tabList:[{
        title: "点菜"
      }, {
        title: "评价"
      }， {
        title: "商家"
      }]
    
    };
  }
  changeTab(value) {
    this.setState({
      current: value
    })
  }
  render() {
  
   
    let {
      current,
      tabList
    } = this.state;
    return ( < view >
      <
      AtTabs current = {
        current
      }
      onClick = {
        this.changeTab.bind(this)
      }
      tabList = {
       tabList
      } > < /AtTabs>

      <
      /view>)
    }
  }

  export default Food;
