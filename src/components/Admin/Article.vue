<template>
  <div class="">
    <sort-table :tableCol="tableCol" :height="521" :tableData="tableData" v-on:edit="edit" v-on:remove="remove"></sort-table>

    <p class="page-bar">
      <Page
        :total="pageTotal"
        :page-size="pageSize"
        :page-size-opts="pageSizeOpts"
        :current="currentPage"
        @on-change="changePage"
        @on-page-size-change="changePageSize"
        size="small"
        show-total
        show-elevator
        show-sizer
        class-name="page-cont"
        >
        </Page>
    </p>
  </div>
</template>
<script>
  import sortTable from './Table.vue'
  import axios from 'axios'
  import { mapActions,mapState } from 'vuex'

    export default {
        components: {
          sortTable
        },
        data () {
            return {
              pageSize: 10,
              pageSizeOpts: [10, 20, 30, 40, 50],
              pageTotal: 40,
              currentPage: 1,
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
                    key: 'author',
                    render (row, column, index) {
                      let name = '无作者';
                      if(row.user.nickname) {
                        name = row.user.nickname;
                      } else {
                        name = row.user.username;
                      }
                      return name;
                    }
                },
                {
                    title: '分类',
                    key: 'sortid',
                    render (row, column, index) {
                      if(row.sort) {
                        return row.sort.sortname;
                      } else {
                        return '无分类';
                      }
                    }
                },
                {
                    title: '时间',
                    key: 'date',
                    render (row, column, index) {
                      return new Date(parseInt(row.date) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
                    }
                },
                {
                    title: '评论',
                    key: 'coment',
                    render (row, column, index) {
                      return row.comm.length;
                    }
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
            this.getArticleList();
          });
        },
        methods: {
          ...mapActions([
            'addToStore'
          ]),
          changePageSize (num) {
            this.pageSize = num;
            this.getArticleList();
          },
          changePage (num) {
            this.currentPage = num;
            this.getArticleList();
          },
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
          getArticleList () {
            axios.get('/api/getArticleList', {params: {currentPage: this.currentPage, pageSize: this.pageSize}}).then( ret => {

              if(ret.data.flag) {
                var list = ret.data.data.rows;
                this.tableData = list;
                this.pageTotal = ret.data.data.count;
              } else {
                this.$Message.info(ret.data.msg);
              }
            })
          },
          edit (index) {
              var item = this.tableData[index];
              this.addToStore(item);
              this.$router.replace({ path: '/admin/write_log' });
          },
          remove (index) {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>确认删除此文章?</p>',
                onOk: () => {
                  var item = this.tableData[index];
                  axios.post('/api/delArticle', item).then(ret => {
                    if(ret.data.flag) {
                      this.getArticleList();
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
  .page-cont {
    display: inline-block;
  }
  .page-bar {
    padding: 20px;
    text-align: right;
  }
  .btn-add {
    padding: 5px 10px;
    text-align: right;
  }
</style>
