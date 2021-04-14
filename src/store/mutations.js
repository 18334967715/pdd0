import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO,
  CART_GOODS_LIST,
  ADD_GOODS_COUNT,
  REDUCE_GOODS_COUNT,
  SELECTED_SINGER_GOODS,
  SELECTED_ALL_GOODS,
  DEL_SINGER_GOODS
} from './mutation-types'
import Vue from 'vue'
export default {
  [HOME_CASUAL](state, {homecasual}) {
    state.homecasual = homecasual;
  },

  [HOME_NAV](state, {homenav}) {
    state.homenav = homenav;
  },

  [HOME_SHOP_LIST](state, {homeshoplist}) {
    state.homeshoplist = homeshoplist;
  },

  [RECOMMEND_SHOP_LIST](state, {recommendshoplist}) {
    state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist);
  },

  [SEARCH_GOODS](state, {searchgoods}) {
    state.searchgoods = searchgoods;
  },

  [USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo;
  },

  [RESET_USER_INFO](state) {
    state.userInfo = {};
  },

  [CART_GOODS_LIST](state, {cartgoods}) {
    state.cartgoods = cartgoods;
  },
// 购物车
  [ADD_GOODS_COUNT](state, {goods}){
    if(goods.buy_count){
      goods.buy_count++;
    }
  },
  [REDUCE_GOODS_COUNT](state, {goods}){
    if(goods.buy_count){
      goods.buy_count--;
      if(goods.buy_count === 0){
        const index = state.cartgoods.indexOf(goods);
        state.cartgoods.splice(index, 1);
      }
    }
  },
  [SELECTED_SINGER_GOODS](state, {goods}){
    if(goods.checked){ // 存在该属性
      goods.checked = !goods.checked;
    }else {
      Vue.set(goods, 'checked', true)
    }
  },
  [SELECTED_ALL_GOODS](state, {isSelected}){
    state.cartgoods.forEach((goods, index)=>{
      if(goods.checked){ // 存在该属性
        goods.checked = !isSelected;
      }else {// 不存在该属性
        Vue.set(goods, 'checked', !isSelected)
      }
    })
  },
  [DEL_SINGER_GOODS](state, {goods}){
    const index = state.cartgoods.indexOf(goods);
    state.cartgoods.splice(index, 1);
  }
}
