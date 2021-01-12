const { Http2ServerRequest } = require("http2");

let http = require('http');

//使用http.createSever方法创建一个web服务器

let sever = http.createServer();

//提供对数据的服务
sever.on('request',(request,response)=>{

});

sever.listen(3000,()=>{
        console.log("服务以启动")
});