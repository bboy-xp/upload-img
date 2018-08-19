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
        <el-table
          :data="linksTableData"
          stripe
          style="width: 100%"
          id="out-table">
          <el-table-column
            prop="id"
            label="id"
            width="50">
          </el-table-column>
          <el-table-column
            prop="staffId"
            label="员工名"
            width="150">
          </el-table-column>
          <el-table-column
            prop="fontUrl"
            label="前台链接"
            width="250">
          </el-table-column>
          <el-table-column
            prop="backUrl"
            label="后台链接"
            width="300">
          </el-table-column>
          <el-table-column
            prop="QRcodeUrl"
            label="二维码链接"
            width="480">
          </el-table-column>
          <el-table-column
            prop="count"
            label="投放数"
            width="80">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <div class="btnContent">
                <div class="deleteBtn" @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-delete"></i><span class="text-margin">修改</span></div>
                <div class="deleteBtn" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i><span class="text-margin">删除</span></div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      linksTableData: []
    };
  },
  async mounted() {
    //判断用户是否登录
    if (!!localStorage.getItem("adminId")) {
      //用户已登陆
    } else {
      this.$router.replace("/admin/adminLogin");
    }

    const getTableDataRes = await axios.get("/getTableDataRes");
    this.linksTableData = getTableDataRes.data;
    // console.log(getTableDataRes.data);
  },
  methods: {
    addStaff() {
      this.$router.replace({ path: "/admin/addStaff" });
    },
    handleDelete(index, row) {
      // console.log(index);
      // console.log(row);
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(async () => {
          const result = await axios.post("/deleteStaff", row);

          this.linksTableData = result.data;

          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleEdit(index, row) {
      const id = row.id;
      this.$router.replace({ path: "/admin/editStaff?id=" + id});
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
.btnContent {
  display: flex;
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
  margin-right: 10px
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