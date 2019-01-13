<template>
    <div>
        <h1>我是主页</h1>        
        <el-button type="danger" @click="logout">点我退出</el-button>
    </div>
</template>
<script>
export default {
    name:'index',
    beforeCreate(){
        let token = window.sessionStorage.getItem('token')
        if(!token){
              this.$message.error('请先登录');
                  this.$router.push('/')
        }
    },
    methods:{
        logout(){
            window.sessionStorage.removeItem('token');
            this.$router.push('/')
        }
    }
}
</script>
<style>

</style>
