import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import { createPublicKey } from 'crypto';
import Child from './child';
import Head from '../../components/head/head';
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  // state={
  //   name:"李四"
  // }
  componentWillMount () { }

  componentDidMount () { 
    // this.setState({name:"李四"})
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () {
   
   }
   /*
   click(){
    this.setState({name:"张三"})
  }
  change(){
    this.setState({name:"改变name值"})
  }
*/
  render () {
    return (
      <View className='index'>
      {/* <Child name="张三" onchange={this.change.bind(this)}></Child>
      <Button onClick={this.click}>改变名字</Button>
        <Text>{this.state.name}</Text> */}
      <Head></Head>
      </View>
    )
  }
}
