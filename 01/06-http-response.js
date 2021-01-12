let http = require('http');

let sever = http.createServer();

sever.on('request',(request,response)=>{
    console.log("url"+ request.url);

    response.write('hello');
    response.end('')
});

sever.listen(3000,()=>{
    console.log('服务器已启动')
})
