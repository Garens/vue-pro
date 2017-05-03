<template>
  <Card class="login">
      <div style="text-align:center">
          <!-- <img src="../../images/logo.png"> -->
          <h2>Login</h2>

          <Form  ref="formInline" :model="formInline" :rules="ruleInline">
              <Form-item prop="user">
                  <Input type="text" v-model="formInline.user" placeholder="Username">
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
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
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
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                        console.log(this.formInline);
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
