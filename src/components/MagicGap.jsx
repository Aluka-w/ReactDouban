import React from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入圆饼图
import  'echarts/lib/chart/pie';
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { PubSub } from "pubsub-js";
import '../static/css/MagicGap.scss'
class MagicGap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: [],            // 标题
      wish_count: [],       // 想看的人
      collect_count: [],    // 看过的人
      dataList: []          // 圆饼图的数据格式
    }
    this.getPubSubList = this.getPubSubList.bind(this)
    this.createEcharts = this.createEcharts.bind(this)
  }
  componentDidMount() {
    PubSub.subscribe('PUBSUBLIST', this.getPubSubList)
  }
  getPubSubList (msg, data) {
    console.log('事件订阅', data)
    // this.createEcharts(data)
    // console.log('得到的数就', this.state)
  }
  createEcharts (data) {
    console.log('dataList', data)
    // 基于准备好的dom，初始化echarts实例
    let pieChart = echarts.init(document.getElementById('leftGap')),
    // 设置参数
    pieOptions = {
      title : {
        text: '热映电影',
        subtext: '数据来源豆瓣',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        x : 'center',
        y : 'bottom',
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
          radius : [20, 70],
          center : ['15%', '50%'],
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
        subtext: '数据来源豆瓣',
        x:'center'
      },
      legend: {
        data: data.title,
        origin: 'vertical'
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
        data: data.title
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