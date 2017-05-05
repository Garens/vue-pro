<template>
  <div class="">
    <div class="btn-add">
      <Button type="primary" @click="addSort">添加</Button>
    </div>
    <sort-table :tableCol="tableCol" :tableData="tableData" v-on:edit="edit" v-on:remove="remove"></sort-table>

    <Modal
        v-model="editModal"
        :title="modalTitle"
        :loading="loading"
        @on-ok="submitEdit"
        @on-cancel="cancelEdit">

        <Form :model="formItem" :label-width="80" :rules="ruleValidate">
            <Form-item label="名称" prop="sortname">
                <Input v-model="formItem.sortname" placeholder="请输入"></Input>
            </Form-item>
            <Form-item label="别名">
                <Input v-model="formItem.alias" placeholder="请输入"></Input>
            </Form-item>
            <Form-item label="排序" prop="taxis">
                <Input v-model="formItem.taxis" :number="true" placeholder="请输入"></Input>
            </Form-item>
            <Form-item label="父级分类">
                <Select v-model="formItem.pid" placeholder="请选择">
                    <Option value="0" :key="[]"> 无 </Option>
                    <Option v-for="item in selectData" :value="item.sid" :key="item">{{ item.sortname }}</Option>
                </Select>
            </Form-item>
            <Form-item label="描述">
                <Input v-model="formItem.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </Form-item>
        </Form>

    </Modal>
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
              loading: true,
              editModal: false,
              modalTitle: '编辑分类',
              ruleValidate: validate,
              selectData: [],
              formItem: {
                  sortname: '',
                  alias: '',
                  taxis: 10,
                  select: '',
                  description: ''
              },
              tableCol: [
                {
                    title: '序号',
                    key: 'index',
                    render (row, column, index) {
                        return (index+1);
                    }
                },
                {
                    title: '名称',
                    key: 'sortname',
                    render (row, column, index) {
                      if(row.pid != 0) {
                        return '<Icon type="ios-pause" color="#4a95fd"></Icon><Icon type="android-remove" color="#4a95fd"></Icon>  ' + row.sortname;
                      } else {
                        return row.sortname;
                      }
                    }
                },
                {
                    title: '别名',
                    key: 'alias'
                },
                {
                    title: '描述',
                    key: 'description'
                },
                {
                    title: '排序',
                    key: 'taxis'
                },
                {
                    title: '文章',
                    key: 'blog',
                    render (row, column, index) {
                      return row.blog.length;
                    }
                },
                {
                    title: '查看',
                    key: 'description',
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
