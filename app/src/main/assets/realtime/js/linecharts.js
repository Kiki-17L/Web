var myChart = echarts.init(document.getElementById('capacity'));//获取容器

window.addEventListener('resize', ()=> {
    myChart.resize();
  });

var url="ws://10.19.48.75:8080/test";

var value=[];//值
var value2=[];//第二根线
var time=[];//时间

//初始化time轴
for (let index = 0; index < 5; index++) {

    let time_string;
    let year;
    let month;
    let day;
    let hour;
    let minutes;
    let seconds;
    let now= new Date();

    
    year=now.getFullYear();
    month=now.getMonth()+1;
    day= now.getDate();
    hour=now.getHours();
    minutes= now.getMinutes();
    seconds=now.getSeconds();


    time_string=year+"/"+month+"/"+day+"  "+hour+":"+minutes+":"+seconds;
    time.push(time_string);
}




//初始化数据
for (let index = 0; index < 5; index++) {
    
    // value2.push(0);
    value.push(null);
}


// 指定图表的配置项和数据
var option = {

    title: {
        text: '温度'
    },
    tooltip: {
        trigger: 'axis'


    },
    legend: {
        data:['天气',"室温"]
    },
    xAxis: {
        data: time,
        boundaryGap:false,
        axisTick:{
                alignWithLabel:true

            },
        axisLabel:{
                            rotate:0

                        }
    },
    yAxis: {},
    series: [{
        name: '天气',
        type: 'line',
        data: value
    }
    // {
    //     name:"室温",
    //     type:"line",
    //     data:value2


    // }



]

};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

if('WebSocket' in window) {
    debug("WebSocket")
    web= new WebSocket(Url);
} else if('MozWebSocket' in window) {
    debug("MozWebSocket")
    web = new MozWebSocket(Url);
}



web.onopen = function(){

    web.send("连接成功");


};


web.onmessage=function(e){

    
    var now= new Date();
    let time_string;
    let year;
    let month;
    let day;
    let hour;
    let minutes;
    let seconds;
    now= new Date();
    
    
    year=now.getFullYear();
    month=now.getMonth()+1;
    day= now.getDate();
    hour=now.getHours();
    minutes= now.getMinutes();
    seconds=now.getSeconds();
    
    time_string=year+"/"+month+"/"+day+"  "+hour+":"+minutes+":"+seconds;
    time.shift();
    time.push(time_string);


    value.shift();
    value.push(e.data);


    myChart.setOption({
    
        title: {
            text: '温度'
        },
        tooltip: {

            trigger: 'axis'

        },
        legend: {
            data:['天气',"室温"]
        },
        xAxis: {
            data: time,
            boundaryGap:false,
            axisTick:{
                alignWithLabel:true

            },
            axisLabel:{
                rotate:0

            }
        },
        yAxis: {},
        series: [{
            name: '天气',
            type: 'line',
            data: value
        }
        // {
        //     name:"室温",
        //     type:"line",
        //     data:value2
    
    
        // }
    
    
    ]
    
    });




};

web.onclose=function() {
    



    // web.send("连接断开");
    alert("连接断开");
};













