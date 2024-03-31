<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <img src="../assets/pic/header-title.png" style="display: block; margin: auto; width: auto; height: 5vw;" />
      </el-header>
      <div class="block">
        <span class="demonstration">请选择年份:</span>
        <el-date-picker
          v-model="value"
          type="year"
          placeholder="Pick a year"
          style="width: 10vw;"
        />
        <RouterLink to="/test2">
        <el-button type="primary" style="margin-left: 1vw;">
          数据管理
        </el-button>
      </RouterLink>
      </div>
      <el-main class="main">
        <LeftBlock />
    <MiddleBlock />
    <RightBlock />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { ref,watch} from "vue";
import LeftBlock from "./LeftBlock.vue";
import MiddleBlock from "./MiddleBlock.vue";
import RightBlock from "./RightBlock.vue";
import { RouterLink } from "vue-router";
const value = ref('');
watch(value, (newValue) => {
  const year = newValue.getFullYear(); // 提取年份部分
  console.log('value 的年份：', year);
});
export default {
  setup() {
    return {
      value
    };
  },
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
.block {
  position:fixed;
  margin-top: 5vw;
  margin-left: 4vw;
  display: flex; /* 将内容设置为 flex 布局 */
  align-items: center; /* 垂直居中 */
}
.demonstration {
  z-index: 999;
  display: block;
  color: white;
  margin-right: 1vw;
  font-size: 14px;
  /* margin-bottom: 20px; */
}
</style>
