<template>
  <div class="left">
    <!-- left1 -->
    <div class="left_block">
      <div style="position: relative;">
        <img src="../assets/pic/title-bg.png" style="width: 90%;">
        <span style="letter-spacing: 0.5vw;
   color: white;
   position: absolute;
   top: 0.3vw;
   left: 1.2vw;">
          B级图表1
        </span>
        <div style="width: 90%;height: 100%;">

          <Barcharts />
        </div>
      </div>

    </div>



    <div class="left_block">
      <div style="position: relative;">
        <img src="../assets/pic/title-bg.png" style="width: 90%;">
        <span style="letter-spacing: 0.5vw;
   color: white;
   position: absolute;
   top: 0.3vw;
   left: 1.2vw;">
          B级图表2
        </span>
        <div style="width: 90%;height: 100%;">

          <Barcharts />
        </div>
      </div>
    </div>

    <div class="left_block">
      <div style="position: relative;">
        <img src="../assets/pic/title-bg.png" style="width: 90%;">
        <span style="letter-spacing: 0.5vw;
   color: white;
   position: absolute;
   top: 0.3vw;
   left: 1.2vw;">
          B级图表3
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
  name: 'LeftBlock',
  components: {
    Barcharts
  }
}
</script>

<style scoped>
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
  height: 100vh;
  width: 33.3%;
}

.left_block {
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