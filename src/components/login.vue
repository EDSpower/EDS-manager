<template>
    <div class="form-container">
        <h2>登录界面</h2>
        <el-form  :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="80px" :model="ruleForm">
      <el-form-item label="账号" prop="username">
    <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
     </el-form-item>
     <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
     </el-form-item>
    <el-button class="btn-login" type="success" @click="submitForm('ruleForm')">登录</el-button>
     </el-form-item>
     </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'top',
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'change' },
            { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' },
            { min: 3, max:10, message: '长度在 3 到 5 个字符', trigger: 'change' }

          ],
          },
      };
    },
     
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('login',this.ruleForm)
            .then(res=>{
                console.log(res);
                
               if(res.data.meta.status===400){
              this.$message.error(res.data.meta.msg);
               }else{
                    this.$message({
                    message: res.data.meta.msg,
                    type: 'success'
            });
            window.sessionStorage.setItem('token',res.data.data.token)
               }
                this.$router.push('/index')
            })
          } else {
              this.$message.error('请正确的填写表单');
                return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="scss">
    body{
        background-color: yellowgreen;
    }
    .form-container{
        background-color: white;
        padding: 20px 40px 40px;
        width: 800px;
        border-radius: 6px;
        margin: 0 auto;
        box-sizing: border-box;
        margin-top: 60px;
        .btn-login{
            width: 100%;
        }
        h2{
            text-align: center;
        }
    }
</style>

