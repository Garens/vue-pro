<template>
  <div class="">
    <sort-table :tableCol="tableCol" :tableData="tableData" v-on:edit="edit" v-on:remove="remove"></sort-table>

  </div>
</template>
<script>
  import sortTable from './Table.vue'
  import axios from 'axios'
  import validate from '@/libs/validate.js'

    export default {
        components: {
          sortTable
        },
        data () {
            return {
              ruleValidate: validate,
              selectData: [],
              formItem: {
                  gid: '',
                  title: '',
                  author: '',
                  sortid: 10,
                  date: '',
                  views: '',
                  coment: ''
              },
              tableCol: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '标题',
                    key: 'title'
                },
                {
                    title: '作者',
                    key: 'author'
                },
                {
                    title: '分类',
                    key: 'sortid'
                },
                {
                    title: '时间',
                    key: 'date'
                },
                {
                    title: '评论',
                    key: 'coment'
                },
                {
                    title: '阅读',
                    key: 'views'
                },
                {
                    title: '查看',
                    key: 'gid',
                    render (row, column, index) {
                      return '<i-button type="ghost" shape="circle" icon="ios-search"></i-button>'
                    }
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render (row, column, index) {
                        return `<i-button type="primary" size="small" @click="emitEvent('edit',${index})">修改</i-button> <i-button type="error" size="small" @click="emitEvent('remove', ${index})">删除</i-button>`;
                    }
                }
              ],
              tableData: [

              ]
            }
        },
        mounted () {
          this.$nextTick(function () {
            this.ruleValidate = validate;
            this.getSortList();
          });

        },
        methods: {
          addSort () {
            this.modalTitle = '添加分类';
            this.editModal = true;
            this.formItem = {
                sortname: '',
                alias: '',
                taxis: 10,
                select: '',
                description: ''
            };
          },
          getSortList () {
            axios.get('/api/getSortList').then( ret => {
              if(ret.data.flag) {
                var list = ret.data.data;
                let _arr = [], arr = [];
                list.forEach(item => {
                  if(item.pid == 0) {
                    _arr.push(item);
                  }
                });
                this.selectData = _arr; //设置下拉为pid为0的列表
                _arr.forEach(item => {
                  arr.push(item);
                  list.forEach(_item => {
                    if(_item.pid == item.sid) {
                      arr.push(_item);
                    }
                  })
                })
                this.tableData = arr;
              } else {
                this.$Message.info(ret.data.msg);
              }
            })
          },
          cancelEdit () {
            this.getSortList();
          },
          submitEdit () {
            let params = this.formItem;
            axios.post('/api/upsertSort', params).then(ret => {
              if(ret.data.flag) {
                this.editModal = false;
                this.getSortList();
              } else {
                this.$Message.info(ret.data.msg);
              }
            })
          },
          edit (index) {
              this.editModal = true;
              var item = this.tableData[index];
              this.formItem = item;
          },
          remove (index) {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>确认删除此分类?</p>',
                onOk: () => {
                  var item = this.tableData[index];
                  axios.post('/api/delSort', item).then(ret => {
                    if(ret.data.flag) {
                      this.editModal = false;
                      this.getSortList();
                    } else {
                      this.$Message.info(ret.data.msg);
                    }
                  })
                },
                onCancel: () => {

                }
            });


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
