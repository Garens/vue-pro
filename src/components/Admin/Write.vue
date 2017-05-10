<template>
  <div class="">
    <Row class="write-row">
      <Col span="2" class="write-title">标题</Col>
      <Col span="22">
        <Input v-model="formItem.title" placeholder="请输入标题..."></Input>
      </Col>
    </Row>
    <Row class="write-row">
      <Col span="2" class="write-title">内容</Col>
      <Col span="22">
        <vue-markdown :style="style" @change="submitEdit" v-model="contentValue">
        </vue-markdown>
      </Col>
    </Row>
    <Row class="write-row">
      <Col span="2" class="write-title">分类</Col>
      <Col span="7">
        <Select v-model="formItem.sortid" placeholder="请选择分类...">
            <Option value="-1" :key="-1"> 无 </Option>
            <Option v-for="item in selectData" :value="item.sid" :key="item.sid">{{ item.sortname }}</Option>
        </Select>
      </Col>
      <Col span="5" class="write-title">
        首页置顶
        <i-switch v-model="formItem.top" size="large">
            <span slot="open">是</span>
            <span slot="close">否</span>
        </i-switch>
      </Col>
      <Col span="5" class="write-title">
        分类置顶
        <i-switch v-model="formItem.sortop" size="large">
            <span slot="open">是</span>
            <span slot="close">否</span>
        </i-switch>
      </Col>
      <Col span="5" class="write-title">
        允许评论
        <i-switch v-model="formItem.allow_remark" size="large">
            <span slot="open">是</span>
            <span slot="close">否</span>
        </i-switch>
      </Col>
    </Row>
    <Row class="write-row">
      <Col span="2" class="write-title">标签</Col>
      <Col span="22">
        <Tag type="border" color="blue" v-for="item in tagList" :key="item" :name="item" closable @on-close="closeTag">{{ item }}</Tag>

        <Input
          v-if="inputVisible"
          v-model="tagInput"
          ref="saveTagInput"
          size="small"
          style="width: 78px"
          @on-enter="handleInputConfirm"
          @on-blur="handleInputConfirm"
          >
          </Input>
        <Button v-else type="ghost" icon="plus" size="small" style="width: 78px" @click="showInput">添加标签</Button>
      </Col>
    </Row>
    <Row class="write-row">
      <Col span="2" class="write-title">摘要</Col>
      <Col span="22">
        <Input v-model="formItem.excerpt" type="textarea" :autosize="{minRows: 2,maxRows: 6}" placeholder="请输入摘要..."></Input>
      </Col>
    </Row>
    <Row class="write-row">
      <Col span="24" class="form-bootom">
        <Button type="primary" @click="saveBlog">发表文章</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
  import axios from 'axios'
  import validate from '@/libs/validate.js'
  // import VueMarkdown from 'vue-markdown'
  import { mavonEditor } from 'mavon-editor'

  import { mapActions,mapState } from 'vuex'
  import { USER_SIGNOUT } from '@/store/user'

    export default {
        components: {
          'vue-markdown': mavonEditor
        },
        data () {
            return {
              tagList: [],
              tagInput: '',
              inputVisible: false,
              selectData: [],
              ruleValidate: validate,
              style: {
                height: "500px"
              },
              contentValue: '',
              htmlcode: '',
              formItem: {
                sortid: 0,
                excerpt: '',
                allow_remark: false,
                sortop: false,
                top: true
              }
            }
        },
        mounted () {
          this.$nextTick(function () {
            this.ruleValidate = validate;
            this.getSortList();
          });

        },
        computed: {
            ...mapState({ user: state => state.user })
        },
        methods: {
          //添加标签到列表
          handleInputConfirm () {
            let inputValue = this.tagInput;
            if (inputValue) {
              this.tagList.push(inputValue);
            }
            this.inputVisible = false;
            this.tagInput = '';
          },
          //点击添加标签时候
          showInput () {
            this.inputVisible = true;
            this.$nextTick(_ => {
              // console.log(this.$refs.saveTagInput.$el.getElementByTag('input'));
              this.$refs.saveTagInput.$el.children[1].focus();
            });
          },
          //关闭标签
          closeTag (event, name) {
            const index = this.tagList.indexOf(name);
            this.tagList.splice(index, 1);
          },
          //发表文章点击方法
          saveBlog () {
            this.formItem.content = this.contentValue;
            let params = {blog: this.formItem, tags: this.tagList};
            console.log(params);
            axios.post('/api/saveBlog', params).then( ret => {
              console.log(ret);
            })
          },
          //获取分类列表方法
          getSortList () {
            axios.get('/api/getSortList').then( ret => {
              if(ret.data.flag) {
                var list = ret.data.data;
                let arr = [];
                list.forEach(item => {
                  if(item.pid == 0) {
                    arr.push(item);
                  }
                });
                this.selectData = arr; //设置下拉为pid为0的列表

              } else {
                this.$Message.info(ret.data.msg);
              }
            })
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
          submitEdit (cont, html) {
            this.contentValue = cont;
            this.htmlcode = html;
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
  .form-bootom {
    text-align: right;
    padding: 0 30px;
  }
  .write-title {
    text-align: center;
    line-height: 32px;
  }
  .write-row {
    padding: 5px 0px;
  }
</style>
