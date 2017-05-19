<template>
  <div class="">
      <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
          <Checkbox
              :indeterminate="indeterminate"
              :value="checkAll"
              @click.prevent.native="handleCheckAll">全选</Checkbox>
      </div>
      <Checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
          <Checkbox v-for="item in tagList" :label="item.tagname"></Checkbox>
      </Checkbox-group>
      <Button type="primary" size="small" @click="delFun">删除</Button>
    </div>
</template>
<script>
  import axios from 'axios'
    export default {
        data () {
            return {
                indeterminate: true,
                checkAll: false,
                checkAllGroup: [],
                tagList: [],
                tagNames: []
            }
        },
        mounted () {
          this.getTagList();
        },
        methods: {
          formatTag (items) {
            items.forEach(item => {
              this.tagNames.push(item.tagname);
            })
          },
          delTags (ids) {
            axios.post('/api/delTags', {ids: ids}).then(res => {
              console.log(res);
            })
          },
          getTagList () {
            axios.get('/api/getTagList').then(res => {
              if(res.data.flag) {
                this.tagList = res.data.data;
                this.formatTag(res.data.data);
              }
            })
          },
          delFun () {
            console.log(this.checkAllGroup);
            this.$Modal.confirm({
                title: '提示',
                content: '<p>确认删除标签?</p>',
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
          },
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = this.tagNames;
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === this.tagNames.length) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>
