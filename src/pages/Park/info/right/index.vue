<template>
    <div class="rightWrap">
        <headerTit :title="title" :time="time" :url="url"></headerTit>
        <div class="main">
            <div class="serBox">
                <span class="selTit l130">
                    选择时段：
                </span>
                <select name="" class="selSty">
                    <option value="0">选择时间</option>
                </select>
                <span class="lines">

                </span>
                 <select name="" class="selSty">
                    <option value="0">选择时间</option>
                </select>
                <span class="selTit l35">
                    指标类型：
                </span>
                <select name="" class="selSty">
                    <option value="0">营收收入</option>
                </select>
                <span class="selTit l38">
                    指数周期：
                </span>
                <select name="" class="selSty">
                    <option value="0">年指数</option>
                </select>
                <div  class="btnSer l55">

                </div>
            </div>
            <div class="mainTop">
                <div class="mainTit">
                    <div class="line"></div>
                    <div class="chartTitle">营收收入走势</div>
                    <div class="lineReserve"></div>
                </div>
                <div class="chartWrap" id="earnChart">

                </div>
            </div>
            <div class="mainBot">
                 <div class="mainTit">
                    <div class="line"></div>
                    <div class="chartTitle">园区十佳企业</div>
                    <div class="lineReserve"></div>
                </div>
                <div class="tabWrap">
                    <table  class="tabCon">
                        <thead class="tabTit">
                            <tr>
                                <th>
                                    排名
                                </th>
                                <th>
                                    企业名称
                                </th>
                                <th>
                                    公司地址
                                </th>
                                <th>
                                    所属产业
                                </th>
                                <th>
                                    营收
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                 <td>
                                    1
                                </td>
                                <td>
                                    XXXX投资开发股份有限公司
                                </td>
                                <td>
                                    北京市经济技术开发区同济中路7号
                                </td>
                                <td>
                                    大数据
                                </td>
                                <td>
                                    197亿
                                </td>
                            </tr>
                            <tr>
                                 <td>
                                    2
                                </td>
                                <td>
                                    XXXX投资开发股份有限公司
                                </td>
                                <td>
                                    北京市经济技术开发区同济中路7号
                                </td>
                                <td>
                                    新一代信息技术
                                </td>
                                <td>
                                    197亿
                                </td>
                            </tr>
                            <tr>
                                 <td>
                                    3
                                </td>
                                <td>
                                    XXXX投资开发股份有限公司
                                </td>
                                <td>
                                    北京市经济技术开发区同济中路7号
                                </td>
                                <td>
                                    大数据
                                </td>
                                <td>
                                    197亿
                                </td>
                            </tr>
                            <tr>
                                 <td>
                                    4
                                </td>
                                <td>
                                    XXXX投资开发股份有限公司
                                </td>
                                <td>
                                    北京市经济技术开发区同济中路7号
                                </td>
                                <td>
                                    新一代信息技术
                                </td>
                                <td>
                                    197亿
                                </td>
                            </tr>
                            <tr>
                                 <td>
                                    5
                                </td>
                                <td>
                                    XXXX投资开发股份有限公司
                                </td>
                                <td>
                                    北京市经济技术开发区同济中路7号
                                </td>
                                <td>
                                    大数据
                                </td>
                                <td>
                                    197亿
                                </td>
                            </tr>
                            <tr>
                                 <td>
                                    6
                                </td>
                                <td>
                                    XXXX投资开发股份有限公司
                                </td>
                                <td>
                                    北京市经济技术开发区同济中路7号
                                </td>
                                <td>
                                    新一代信息技术
                                </td>
                                <td>
                                    197亿
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'infoRight',
        data(){
            return{
                title:'园区经营大数据分析',
                time:'',
                url:'',
                xAxisMonth: [
                    "",
                    "1月",
                    "2月",
                    "3月",
                    "4月",
                    "5月",
                    "6月",
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月",
                    "12月",
                    "",
                ],
            }
        },
        mounted(){
            this.getEarnData()
        },
        methods:{
            async getEarnData(){
                this.initEarnChart()
            },
            initEarnChart(){
                let that = this;
                var myChart = this.$echarts.init(document.getElementById("earnChart"));
                let option= {
                    color: [
                        "#FFE700",
                        "#93FDFF",
                        "#318BFF",
                    ],
                    tooltip: {
                        textStyle: {
                            // fontSize: 18
                            fontSize: that.subFont(0.18),
                        },
                        padding: 10,
                        trigger: "axis",
                        axisPointer: {
                            type: "shadow",
                        },
                    },
                    legend:[{
                        x: "center",
                        // y: "bottom",
                        bottom: "4%",
                        // align:'center',
                        width: 1000,
                        itemWidth: 15,
                        itemHeight: 15,
                        itemGap:30,
                        icon: "rect",
                        textStyle: {
                            // fontSize: 16,
                            fontSize: that.subFont(0.22),
                            color: "#3A82CA",
                            fontWeight:'500'
                        },
                        // data: this.legendArr,
                        },
                    ],
                     grid: {
                        left: "14%",
                        right: "14%",
                        bottom: "14%",
                        top: "8%",
                        containLabel: true,
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: that.xAxisMonth,
                            boundaryGap: false,
                            splitLine: {
                                show: false,
                            },
                            axisTick: {
                                alignWithLabel: true,
                                show: true,
                                inside: "top",
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: "#3A82CA",
                                    fontSize: that.subFont(0.22),
                                }, // 样式
                            },

                            axisLabel: {
                                interval: 0, //横轴信息全部显示
                                color: "#ffffff",
                                fontSize: that.subFont(0.22),
                                // formatter: function (value) {
                                //     return value.length > 5 ? value.substring(0, 5) + "..." : value;
                                // },
                            },
                        },
                    ],
                    yAxis: [
                        {
                            type: "value",
                            name: "",
                            nameTextStyle: {
                                color: "#06FEF7",
                            },
                            axisTick: {
                                alignWithLabel: true,
                                show: false,
                            },
                            // data: this.yAxisData,
                            axisLabel: {
                                formatter: "{value}",
                                textStyle: {
                                    //改变刻度字体样式
                                    color: '#fff',

                                },
                                fontSize: that.subFont(0.22),
                                fontWeight:'500'

                            },
                            splitLine: {
                            show: true,
                            lineStyle: {
                                // 使用深浅的间隔色
                                color: "#3A82CA",

                                type: "solid",
                            },
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: "#3A82CA",
                                }, // 样式
                            },
                        },
                        {
                            name: "",
                            nameTextStyle: {
                                color: "#06FEF7",
                            },
                            axisTick: {
                                alignWithLabel: true,
                                show: false,
                            },
                            // data: this.yAxisData,
                            splitLine: {
                            show: true,
                            lineStyle: {
                                // 使用深浅的间隔色
                                color: "#3A82CA",

                                type: "solid",
                            },
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: "#3A82CA",
                                }, // 样式
                            },
                        },
                    ],
                    series:[
                        {   
                            name:"2020年园区经营收入",
                            type: 'line',
                            symbolSize: 0,
                            data: [38,40, 43, 50, 55, 65, 72, 86,89, 92, 95, 105, 112, ],
                            // color:"#a5a5a5",
                            label: {
                                normal: {
                                    show: false,
                                }
                            },
                        },
                        {   
                            name:"园区经营收入预测",
                            type: 'line',
                            symbolSize: 0,
                            data: [22,20, 23, 30, 35, 45, 52, 56,61, 62, 65, 75, 82, ],
                            // color:"#a5a5a5",
                            label: {
                                normal: {
                                    show: false,
                                }
                            },
                        },
                        {   
                            name:"2019年园区经营收入",
                            type: 'line',
                            symbolSize: 0,
                            data: [24,34, 25, 40, 33, 47, 62, 57,59, 74, 62, 78, 82, ],
                            // color:"#a5a5a5",
                            label: {
                                normal: {
                                    show: false,
                                }
                            },
                        },
                    ]
                };
                
                myChart.setOption(option);
                // window.onresize = function(){
                //     myChart.resize()
                // }
            }
        }
    }
</script>

<style scoped>
.rightWrap{
    width: 100%;
    height: 100%;
    padding: 0 0px 17px 0;
    box-sizing: border-box;
}
.main{
    width: 100%;
    box-sizing: border-box;
    padding: 0 25px 20px 20px;
}
.serBox{
    height: 38px;
    width: 100%;
    /* background: brown; */
}
.mainTop{
    margin-top: 13px;
    width: 100%;
    height: 395px;
    background: url(../../../../assets/img/midBotBg.png) no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
}
.mainBot{
    margin-top: 10px;
    width: 100%;
    height: 395px;
    background: url(../../../../assets/img/midBotBg.png) no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
}
.mainTit{
    height: 25px;
    width: 339px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
}
.chartTitle {
  height: 25px;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 25px;
}
.chartWrap{
    width: 100%;
    height: calc(100% - 50px);
}
.lines{
    width: 18px;
    height: 2px;
    display: block;
    background: #A1D3FC;
    margin: 0 10px;
}
.serBox{
    display: flex;
    /* flex-direction: column; */
    align-items: center;
}
.selTit{
    color: #06FEF7;
    font-size: 20px;
    font-family:PingFangSC-Medium, PingFang SC;
    font-weight: 500;
}
.selSty{
    appearance: none;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    background-image: url(../../../../assets/parkImg/selUp.png),url(../../../../assets/parkImg/selBg.png);
    background-repeat: no-repeat,no-repeat;
    background-position: 90% center,center;
    border: none;
    height: 38px;
    width: 129px;
    color: #fff;
    font-family:PingFangSC-Medium, PingFang SC;
    padding-left: 15px;
    font-size: 18px;
}
.btnSer{
    width: 122px;
    height: 38px;
    background-image: url(../../../../assets/parkImg/btn.png);
    display: inline-block;
    cursor: pointer;
}
.tabWrap{
    width: 1309px;
    height: 321px;
    margin: 0 auto;
    margin-top:18px ;
    padding: 0 30px 0 10px;
    box-sizing: border-box;
    overflow: auto;
}
.tabWrap::-webkit-scrollbar{
    width: 4px;
}
.tabWrap::-webkit-scrollbar-track {
  background-color: #1f4076;
}
.tabWrap::-webkit-scrollbar-thumb {
  background-color: #009DD8;
}
.tabCon{
    width: 100%;
    border-collapse: collapse
}
.tabCon tr{
    width: 100%;
    height: 50px;
    border-top:2px solid #033385;
    border-bottom:2px solid #033385;
}
.tabCon .tabTit tr{
    background: linear-gradient(to right,rgba(2,78,168,0.5),rgba(4,55,125,0.5));
    border-top: none;
}
.tabTit th{
    font-size: 20px;
    color: #06FEF7;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    text-align: center;
}

.tabTit th:first-child{
    width: 112px;
}
.tabTit th:last-child{
    width: 180px;
}
.tabCon td{
    text-align: center;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
}
tbody tr:nth-child(even){
    background: linear-gradient(to right,rgba(2,78,168,0.5),rgba(4,55,125,0.5));
}
tbody tr:nth-child(odd){
    background: linear-gradient(to right,rgba(2,63,140,0.5),rgba(5,47,111,0.5));
}
</style>