<template>
  <div class="content">
    <div class="text">长按或扫描二维码</div>
    <div class="text">参加客服微信进入免费领取通道</div>
    <img class="imgContent" :src="imageUrl" alt="404">
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      imageUrl: ""
    };
  },
  async mounted() {
    //获取url中参数
    this.id = this.$route.query.id;

    const getImageUrl = await axios.post("/getImageUrl", {
      id: this.id
    });
    this.imageUrl = getImageUrl.data;

    const updateCount = await axios.post("/updateCount", {
      id: this.id
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text {
  font-weight: bold;
  font-size: 24px;
  margin: 0.6em 0;
}
.imgContent {
  margin-top: 1em;
  max-width: 85vw;
}
</style>
