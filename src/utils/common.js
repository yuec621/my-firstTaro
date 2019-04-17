//获取菜品数量
import Taro from '@tarojs/taro';
const foodKey="taro_meituan";
export function getFoodCount(food){
   let store=Taro.getStorageSync(foodKey);
   if(store){
    if(store[food.id]){
        return store[food.id].Num;
    }else{
       return 0; 
    }
   }else{
       return 0;
   }
}
//设置菜品数量
export function setFoodCount(food,Num,type,callBack){
    if(food){
       let store= Taro.getStorageSync(foodKey);
       if(!store) store={};
       if(type=="cut"){
        if(Num==1){
            if(store[food.id]){
                delete store[food.id];
            }else{
                if(store[food.id]){
                    store[food.id].Num=Num-1;
                }
            }
            Taro.setStorageSync(foodKey,store);
            callBack&&callBack();
        }
       }
       if(type=="add"){
        if(store[food.id]){
             store[food.id].Num=Num+1;
        }else{
            
                store[food.id]={Num:1,...food};
            
        }
        Taro.setStorageSync(foodKey,store);
        callBack&&callBack();
    }
    }
}