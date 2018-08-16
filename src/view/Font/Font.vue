<template>
  <div class="content">
    <div class="text">长按或扫描二维码</div>
    <div class="text">参加客服微信进入免费领取通道</div>
    <img class="imgContent" src="http://www.9r1zxn.cn///uploads/20180816/adfec39c948d86c1b269a8a1f60f8b34.jpeg" alt="404">
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
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
  max-height: 60vh;
}
</style>
