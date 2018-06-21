import React from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入圆饼图
import  'echarts/lib/chart/pie';
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import '../static/css/MagicGap.scss'
class MagicGap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // title: [],            // 电影标题
      // wish_count: [],       // 想看的人
      // collect_count: [],    // 看过的人
      // dataList: []          // 圆饼图的数据格式
      PubSubList: {}
    }
    this.createEcharts = this.createEcharts.bind(this)
  }
  // 更新了props之后立即更新的周期函数
  componentWillReceiveProps (nextProps) {
    console.log('MagicGap', nextProps)
    this.createEcharts(nextProps.PubSubList)
  }
  createEcharts (data) {
    // let data = this.props
    console.log('echart', data)
    // 基于准备好的dom，初始化echarts实例
    let pieChart = echarts.init(document.getElementById('leftGap')),
    // 设置参数
    pieOptions = {
      title : {
        text: '热映电影',
        subtext: '想看的人数',
        left: 0,
        top: 0
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        x : 'right',
        y : 'top',
        data: data.title
      },
      toolbox: {
        show : true,
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {
            show: true,
            type: ['pie', 'funnel']
          },
          restore : {show: true},
          saveAsImage : {show: true}
        }
      },
      calculable : true,
      series : [
        {
          name:'想看的人数',
          type:'pie',
          radius : [15, 75],
          center : ['50%', '50%'],
          roseType : 'area',
          data: data.dataList
        }
      ]
    }
    // 绘制图表
    pieChart.setOption(pieOptions)

    let barChart = echarts.init(document.getElementById('rightGap')),
    barOptions = {
      color: ['#3398DB'],
      title : {
        text: '热映电影',
        subtext: '已看的人数',
        left: 0,
        top: 0
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: data.title,
        // name: '已经看过的人数',
        boundaryGap: true,
        axisLabel :{
          interval:0,
          rotate:-5,
          formatter: function (value) {
            if(value.length > 2) {
              return (`${value.substring(0,2)}...`)
            }else {
              return value
            }
          },
          margin: 8
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: data.collect_count,
        type: 'bar'
      }]
    };
    barChart.setOption(barOptions)
  }
  render () {
    return (
      <div id="MagicGap">
        <div id="leftGap"></div>
        <div id="rightGap"></div>
      </div>
    )
  }
}
export default MagicGap