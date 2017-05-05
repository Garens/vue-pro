<template>
  <div class="">
    <Form :model="formItem"  :label-width="60">
      <Form-item label="标题">
          <Input v-model="formItem.input" placeholder="请输入标题..."></Input>
      </Form-item>
      <Form-item label="内容">
        <vue-markdown :style="style" @save="submitEdit" :value="contentValue">
        </vue-markdown>
      </Form-item>

      <Form-item label="标签">
          <Input v-model="formItem.type" placeholder="请输入"></Input>
      </Form-item>
    </Form>
  </div>
</template>
<script>
  import axios from 'axios'
  import validate from '@/libs/validate.js'
  // import VueMarkdown from 'vue-markdown'
  import { mavonEditor } from 'mavon-editor'

    export default {
        components: {
          'vue-markdown': mavonEditor
        },
        data () {
            return {
              ruleValidate: validate,
              style: {
                height: "500px"
              },
              contentValue: 'this is the test',
              formItem: {
                input: '',
                type: 1
              }
            }
        },
        mounted () {
          this.$nextTick(function () {
            this.ruleValidate = validate;

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
          submitEdit (item, i, t) {
            console.log(item);
            console.log(i);
            console.log(t);
            console.log(123);
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
