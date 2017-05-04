<template>
  <Card class="login">
      <div style="text-align:center">
          <!-- <img src="../../images/logo.png"> -->
          <h2>Login</h2>

          <Form  ref="formInline" :model="formInline" :rules="ruleInline">
              <Form-item prop="user">
                  <Input type="text" v-model="formInline.name" placeholder="Username">
                      <Icon type="ios-person-outline" slot="prepend"></Icon>
                  </Input>
              </Form-item>
              <Form-item prop="password">
                  <Input type="password" v-model="formInline.password" placeholder="Password">
                      <Icon type="ios-locked-outline" slot="prepend"></Icon>
                  </Input>
              </Form-item>
              <Form-item>
                  <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
              </Form-item>
          </Form>
      </div>
  </Card>

</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from '@/store/user'
    import axios from 'axios'

    export default {
        data () {
            return {
                formInline: {
                    name: '',
                    password: ''
                },
                ruleInline: {
                    name: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 5, message: '密码长度不能小于5位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            ...mapActions([USER_SIGNIN]),
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                      axios.post('/api/login',this.formInline).then(ret => {
                        if(ret.data.flag) {
                          this.$Message.success('登录成功!');
                          this.USER_SIGNIN(this.formInline);
                          this.$router.replace({ path: '/admin' });
                        }else {
                          this.$Message.error(ret.data.msg);
                        }
                      });
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .login {
    margin-top: 20%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }
  .login h2 {
    margin-bottom: 15px;
  }
</style>
