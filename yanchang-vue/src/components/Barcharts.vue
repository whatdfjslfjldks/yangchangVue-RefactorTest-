<template>
  <div ref="chartRef" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'Barcharts',
  data() {
    return {
      chartData: [
        { month: '1月', value: 80 },
        { month: '2月', value: 90 },
        { month: '3月', value: 85 },
        { month: '4月', value: 95 },
        { month: '5月', value: 88 },
        { month: '6月', value: 92 },
        { month: '7月', value: 89 },
        { month: '8月', value: 93 },
        { month: '9月', value: 87 },
        { month: '10月', value: 91 },
        { month: '11月', value: 86 },
        { month: '12月', value: 94 }
      ]
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const chartRef = this.$refs.chartRef;
      const myChart = echarts.init(chartRef);
      myChart.setOption(this.getOption());
    },
    getOption() {
      return {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          x: 46,
          y: 35,
          x2: 30,
          y2: 25,
          borderWidth: 0
        },
        calculable: false,
        legend: {
          data: ['效能指数'],
          textStyle: {
            color: '#e9ebee'
          }
        },
        xAxis: [
          {
            type: 'category',
            data: this.chartData.map(item => item.month),
            splitLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#a4a7ab',
                align: 'center'
              },
              interval: 0
            },
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '效能指数（%）',
            min: 0,
            max: 100,
            nameTextStyle: {
              color: '#1afffd'
            },
            axisLabel: {
              formatter: '{value} ',
              textStyle: {
                color: '#a4a7ab',
                align: 'right'
              }
            },
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            }
          }
        ],
        series: [
          {
            name: '效能指数',
            type: 'bar',
            barWidth: 10,
            data: this.chartData.map(item => item.value),
            itemStyle: {
              color: '#0ad5ff'
            }
          },
          {
            name: '效能指数折线',
            type: 'line',
            yAxisIndex: 0,
            data: this.chartData.map(item => item.value),
            itemStyle: {
              color: '#1afffd'
            },
            tooltip: {
              show: false
            }
          }
        ]
      };
    }
  }
};
</script>
