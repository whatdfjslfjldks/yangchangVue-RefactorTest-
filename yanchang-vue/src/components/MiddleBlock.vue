<template>
    <div class="middle">
      <!-- middle1 -->
      <div class="middle_block">
        <div style="position: relative;">
        <img src="../assets/pic/title-bg.png" style="width: 90%;">
        <span style="letter-spacing: 0.5vw;
   color: white;
   position: absolute;
   top: 0.3vw;
   left: 1.2vw;">
          综合效能
        </span>
        <div style="width: 90%;height: 14vw;">

          <Barcharts />
        </div>
      </div>

      </div>
      <!-- middle2 -->
      <div class="middle_block">
        <div style="position: relative;">
        <img src="../assets/pic/title-bg.png" style="width: 90%;">
        <span style="letter-spacing: 0.5vw;
   color: white;
   position: absolute;
   top: 0.3vw;
   left: 1.2vw;">
       A级指标
        </span>
        <div style="width: 90%;height: 14vw;">

          <Barcharts />
        </div>
      </div>

      </div>
    </div>
  </template>
  
  <script>
  import Barcharts from './Barcharts.vue'
  export default {
    name: 'MiddleBlock',
    components:{
      Barcharts,
    }
  }
  </script>
  
  <style scoped>
  .middle {
    display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
  height: 100vh;
  width: 33.3%;
  }
  
  .middle_block {
    background-image: url(../assets/pic/border.png);
  background-repeat: no-repeat;
  background-size: 90% 100%;
  margin-bottom: 1vw;
  /* background-attachment: fixed; */
  /* background-color: aqua; */
  width: 90%;
  height: 38%;
  }
  </style>
  