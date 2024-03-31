<template>
    <div class="right">
      <!-- right1 -->
      <div class="right_block">
        <div style="position: relative;">
        <img src="../assets/pic/title-bg.png" style="width: 90%;">
        <span style="letter-spacing: 0.5vw;
   color: white;
   position: absolute;
   top: 0.3vw;
   left: 1.2vw;">
          B级图表4
        </span>
        <div style="width: 90%;height: 100%;">

          <Barcharts />
        </div>
      </div>

      </div>
      <!-- right2 -->
      <div class="right_block">
        <div style="position: relative;">
        <img src="../assets/pic/title-bg.png" style="width: 90%;">
        <span style="letter-spacing: 0.5vw;
   color: white;
   position: absolute;
   top: 0.3vw;
   left: 1.2vw;">
          B级图表5
        </span>
        <div style="width: 90%;height: 100%;">

          <Barcharts />
        </div>
      </div>

      </div>
      <!-- right3 -->
      <div class="right_block">
        <div style="position: relative;">
        <img src="../assets/pic/title-bg.png" style="width: 90%;">
        <span style="letter-spacing: 0.5vw;
   color: white;
   position: absolute;
   top: 0.3vw;
   left: 1.2vw;">
          B级图表6
        </span>
        <div style="width: 90%;height: 100%;">

          <Barcharts />
        </div>
      </div>

      </div>
    </div>
  </template>
  
  <script>
  import Barcharts from './Barcharts.vue';
  export default {
    name: 'RightBlock',
    components:{
      Barcharts
    }
  }
  </script>
  
  <style scoped>
  .right {
    display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
  height: 100vh;
  width: 33.3%;
  }
  
  .right_block {
    background-image: url(../assets/pic/border.png);
  background-repeat: no-repeat;
  background-size: 90% 100%;
  margin-bottom: 1vw;
  /* background-attachment: fixed; */
  /* background-color: aqua; */
  width: 90%;
  height: 25%;
  }
  </style>
  