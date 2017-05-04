<template>
  <div class="">
    <div class="btn-add">
      <Button type="primary">添加</Button>
    </div>
    <user-table :tableCol="tableCol" :tableData="tableData" v-on:show="show" v-on:remove="remove"></user-table>
  </div>
</template>
<script>
  import userTable from './Table.vue'
  import axios from 'axios'

    export default {
        components: {
          userTable
        },
        data () {
            return {
              tableCol: [
                {
                    title: '用户名',
                    key: 'username'
                },
                {
                    title: '昵称',
                    key: 'nickname'
                },
                {
                    title: '角色',
                    key: 'role',
                    render (row, column, index) {
                      return row.role == 'admin' ? '管理者' : '作者';
                    }
                },
                {
                    title: '邮箱',
                    key: 'email'
                },
                {
                    title: '描述',
                    key: 'description'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render (row, column, index) {
                        return `<i-button type="primary" size="small" @click="emitEvent('show',${index})">查看</i-button> <i-button type="error" size="small" @click="emitEvent('remove', ${index})">删除</i-button>`;
                    }
                }
              ],
              tableData: [

              ]
            }
        },
        mounted () {
          this.getUserList();
        },
        methods: {
          getUserList () {
            axios.get('/api/getUserList').then( ret => {
              if(ret.data.flag) {
                this.tableData = ret.data.data;
              }
            })
          },
          show (index) {
              this.$Modal.info({
                  title: '用户信息',
                  content: `姓名：${this.tableData[index].username}<br>年龄：${this.tableData[index].age}<br>地址：${this.tableData[index].address}`
              })
          },
          remove (index) {
              this.tableData.splice(index, 1);
          }
        }
    }
</script>
<style>
  .btn-add {
    padding: 5px 10px;
    text-align: right;
  }
</style>
