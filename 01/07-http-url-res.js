let http = require('http');
//1.创建sever
let sever = http.createServer();

//2/监听request时间
sever.on('request',(request,respones)=>{
        console.log('请求路径：'+request.url);
        let url = request.url;
        if(url==='/'){
            respones.end('index');
        }else if(url==='/login'){
            respones.end('login');
        }else{
            respones.end('404未找到');
        }
});

//3.绑定端口号
sever.listen(3333,()=>{
    console.log('服务器已启动 3333端口')
});