<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 3}">
      <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <a href="#"> {{user.name}} </a> |
                <a href="#">帮助中心</a> |
                <a href="#">安全中心</a> |
                <a @click="logout"><Icon type="log-out"></Icon></a>
            </div>
        </div>
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left" :style="menuStyle">
                <Menu active-name="1" theme="dark" width="auto" @on-select="selectMenu">
                    <div class="layout-logo-left"></div>
                    <Menu-item v-for="(item,index) in menuItem" :name="item.name">
                        <Icon :type="item.icon" :size="iconSize" :title="item.text"></Icon>
                        <span class="layout-text">{{item.text}}</span>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                      <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2015-2017 &copy; Garens
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    import axios from 'axios'
    import { mapActions,mapState } from 'vuex'
    import { USER_SIGNOUT } from '@/store/user'
    import menuItem from './menuItem'

    export default {
        data () {
            return {
                spanLeft: 3,
                spanRight: 21,
                menuItem: [],
                menuStyle: {height: (window.innerHeight-40) + 'px'}
            }
        },
        mounted () {
          this.menuItem = menuItem.admin;
          this.onResizeWindow();
        },
        computed: {
            iconSize () {
                return this.spanLeft === 3 ? 16 : 24;
            },
            ...mapState({ user: state => state.user })
        },
        methods: {
          onResizeWindow() {
            var _this = this;
            window.onresize = function() {
              _this.menuStyle.height = (window.innerHeight-40) +'px';
            }
          },
          getMenuItem () {
            this.$http.get()
          },
          selectMenu (name) {
            this.$router.replace({ path: name });
          },
          ...mapActions([USER_SIGNOUT]),
          logout () {
            this.$Modal.confirm({
                    title: '提示',
                    content: '确定退出系统?',
                    onOk: () => {
                        this.USER_SIGNOUT()
                        this.$Message.info('退出系统成功！');
  				              this.$router.replace({ path: '/admin/login' })
                    },
                    onCancel: () => {
                        // this.$Message.info('点击了取消');
                    }
                });
          },
          getList () {
            console.log(1);
            axios.get('/api/').then( ret => {
              console.log(ret);
              this.$router.push('/');
            })
          },
            toggleClick () {
                if (this.spanLeft === 3) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 3;
                    this.spanRight = 21;
                }
            }
        }
    }
</script>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
</style>
