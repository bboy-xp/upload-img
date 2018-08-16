<template>
  <div class="container">
    <div class="navContent">
      <div class="header-logo">
        <span class="myLogo">xp</span>
        后台管理系统
      </div>
      <div class="user-panel">
        <div class="user-panel-headImg">
          <img class="headImg" src="../../../assets/img/headImg.jpg" alt="404">
        </div>
        <div><i class="el-icon-circle-check-outline"></i><span class="user-panel-text">超级管理员</span></div>
        <div class="user-panel-edit-admin"><i class="el-icon-edit"></i><span class="user-panel-text user-panel-text-color">管理员管理入口</span></div>
      </div>
      <div class="sidebar-nav-heading">
        <span class="nav-heading-text">Controller </span>
        <span>管理控制中心</span>
      </div>
      <div class="nav">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">链接管理</span>
          </el-menu-item>
          
        </el-menu>
      </div>
      
    </div>
    <div class="tableContent">
      <div class="system-head">
        <span class="system-head-text">欢迎你, 超级管理员</span>
      </div>
      <div class="tableBox">
        <el-button @click="addStaff" class="addStaffBtn" type="primary"><i class="el-icon-plus"></i><span>添加链接</span></el-button>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
    };
  },
  async mounted() {
    //判断用户是否登录
    if (!!localStorage.getItem("adminId")) {
      //用户已登陆
    } else {
      this.$router.replace("/admin/adminLogin");
    }

    

  },
  methods: {
    addStaff() {
      this.$router.replace({ path: "/admin/addStaff" });
    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
}
.myLogo {
  font-size: 16px;
  font-weight: bold;
}
.header-logo {
  height: 57px;
  font-size: 16px;
  text-align: center;
  line-height: 57px;
  color: #0e90d2;
  border-right: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
}
.user-panel {
  padding: 28px 22px 22px 22px;
  border-right: solid 1px #e6e6e6;
}
.user-panel-headImg {
  border-radius: 50%;
  width: 82px;
  height: 82px;
  margin-bottom: 10px;
  margin-left: 10px;
  overflow: hidden;
}
.user-panel-text {
  margin-left: 5px;
}
.user-panel-text-color {
  color: #0e90d2;
}
.user-panel-edit-admin {
  font-size: 12px;
  margin-top: 5px;
}
.headImg {
  width: 82px;
  height: 82px;
}
.navContent {
  flex-basis: 15%;
}
.sidebar-nav-heading {
  padding: 24px 17px;
  font-size: 15px;
  font-weight: 500;
  border-top: solid 1px #e6e6e6;
  border-right: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
}
.nav-heading-text {
  font-weight: bold;
  margin-right: 10px;
  font-size: 16px;
}
.tableContent {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.system-head {
  height: 57px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: solid 1px #e6e6e6;
}
.system-head-text {
  color: #999;
  font-size: 14px;
  margin-right: 5vw;
}
.tableBox {
  flex: 1;
  background-color: rgb(233, 236, 243);
  padding: 10px;
  overflow: scroll;
}
.deleteBtn {
  height: 24px;
  width: 50px;
  border: 1px solid #f35842;
  color: #f35842;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-margin {
  margin-left: 3px;
}
.addStaffBtn {
  width: 120px;
  margin-bottom: 10px;
  margin-left: 15px;
}
</style>