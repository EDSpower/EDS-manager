<template>
  <div class="main-container">
    <el-container>
      <el-header height="100px">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img src="../assets/logo.png" alt>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-light">
              <h2>后台管理系统</h2>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-button type="danger" @click="logout">点我退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                    <i class="el-icon-menu"></i>
                    选项1</el-menu-item>
                <el-menu-item index="1-2">
                    <i class="el-icon-menu"></i>
                    选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
      
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "index",
  beforeCreate() {
  
  },
  methods: {
    logout() {
      window.sessionStorage.removeItem("token");
      this.$router.push("/");
    }
  },
  created() {
      this.$axios.get('menus',{headers:{
          Authorization:window.sessionStorage.getItem('token')
      }})
      .then(res=>{
          console.log(res);
          
      })
  },
};
</script>
<style lang='scss'>
.main-container {
  height: 100%;

  > .el-container {
    height: 100%;
  }
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header {
    .el-row {
      height: 100%;
    }
    img {
      height: 100px;
    }
    .el-col-2 {
      text-align: right;
      button {
        margin-top: 30px;
      }
    }
    .el-col-4 {
      text-align: left;
    }
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  //左边滑动侧栏样式
  .el-submenu__title{
      text-align: left;
  }
}
</style>
