<template>
  <div class="me" v-if="userInfo.id">

    <me-top/>
  </div>
  <select-login v-else />
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import {mapState, mapActions} from 'vuex';
  import SelectLogin from './../Login/SelectLogin';
  import MeTop from './MeTop';
  export default {
    name: "Me",
    computed: {
      ...mapState(['userInfo'])
    },
    components:{
      SelectLogin,
      MeTop
    },
    filters:{
      phoneFormat(phone){
        // 1. 字符串转成数组
        let phoneArr = [...phone];
        console.log(phoneArr);
        // 2. 遍历
        let str = '';
        phoneArr.forEach((item, index)=>{
          if(
            index === 3 ||
            index === 4 ||
            index === 5 ||
            index === 6
          ){
            str += '*';
          }else {
            str += item;
          }
        });
        // 3. 返回结果
        return str;
      }
    },
    methods: {
      ...mapActions(['logOut']),
      dealLogout(){
        MessageBox.confirm('您确定退出登录吗?').then(action => {
          // console.log(action);
          if(action === 'confirm'){
            this.logOut();
            // 回到主界面
            this.$router.replace('/home');
          }
        });
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me
    width 100%
    height 100%
    background-color #f5f5f5
    font-size 14px

</style>
