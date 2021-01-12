//1.加载fs文件操作核心模块
let fs = require('fs');

//2.读取文件操作
fs.readFile('./hello.txt',(error,data)=>{
        if(error){
            console.log("读取失败");
            return;
        }


        console.log(data.toString());

});