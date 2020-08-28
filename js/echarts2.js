
setTimeout(function(){
    console.log(xData)
    drawChart();//處理fetch非同步
},300)
// 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(document.getElementById('main'));

function drawChart(){
    // 指定图表的配置项和数据

    let option = {
        textStyle:{
            fontSize:20
        },
        title: {
            text: '投組報酬率模擬'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer:{
                type:'line',
            },
            backgroundColor: 'rgba( 29, 94, 105, .8)',
            lable:{
                borderColor:'#16b6d2'
            },
            // formatter:'{b}<br />\
            //                   <span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#5374E9"></span>\
            //                   {a0}：{c0}<br />\
            //                   <span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#FFA123"></span>\
            //                   {a1}：{c1}%<br />\
            //                   <span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#37C2CF"></span>\
            //                   {a2}：{c2}%<br />\
            //                   <span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#F97979"></span>\
            //                   {a3}：{c3}%<br />',
            formatter: function (params) {
                var html=params[0].name+"<br>";
                for(var i=0;i<params.length;i++){
                    html+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+params[i].color+';"></span>'

                    html+=params[i].seriesName+" : "+params[i].value+" %<br>";

                }
                return html;
            }

        },
        legend: {
            x: 'right',
            orient: 'vertical',
            data: ['Alpha 40_old']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            },
            x: 'center',
        },
        //日期 X軸
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xData,
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            boundaryGap: true,//X軸不從0開始 會保持距離
            
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: '#eee'//y軸格線顏色
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            axisLabel: {  
                show: true,  
                interval: 'auto',  
                formatter: '{value} %'  
            }, 
            
        },
        series: [
            //資料筆數
            {
                name: 'Alpha 40_old',
                type: 'line',
                // stack: '总量',
                data: yData1,
                color: ['#16b6d2'],
                lineStyle:{
                    width:2//设置线条粗细
                },
                showSymbol: false,
                
            },
            // {
            //     name: '賣出',
            //     type: 'line',
            //     // stack: '总量',
            //     data: yDataSell,
            //     color: ['#ff6f80'],
            //     lineStyle:{
            //         width:5//设置线条粗细
            //     }
            // },
        ]
        
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    /*窗口自适应，关键代码*/
    window.onresize = function () {
        myChart.resize();
    }
    

}
