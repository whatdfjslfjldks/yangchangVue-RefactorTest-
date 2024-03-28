<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <img src="../assets/pic/header-title.png" style="display: block; margin: auto; width: auto; height: 5vw;" />
      </el-header>
      <el-main class="main">
        <LeftBlock />
    <MiddleBlock />
    <RightBlock />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import LeftBlock from "./LeftBlock.vue";
import MiddleBlock from "./MiddleBlock.vue";
import RightBlock from "./RightBlock.vue";
export default {
  components: {
    LeftBlock,
    MiddleBlock,
    RightBlock
  }
};
</script>
<style>
.header {
  height: 10vh;
  /* 设置 header 的高度为 10vh */
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  height: 90vh;
  /* 设置 main 的高度为 90vh */
  width: auto;
  overflow: hidden;
  background: url("../assets/pic/wrapper-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -1vw;
}
</style>
