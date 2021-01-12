let http = require('http');
let fs = require('fs');

let sever = http.createServer();

sever.on('request',(req,res)=>{

    let url = req.url;
    if(url ==='/'){
        fs.readFile('./rescource/index.html',(err,data)=>{
                if(err){
                    res.setHeader('Content-Type','text/plain; charset=utf-8');
                    res.end('文件读取失败');
                }else{
                    res.setHeader('Content-Type','text/html; charset=utf-8');
                    res.end(data);
                }
        })
        
    }

});

sever.listen(3000,()=>{
    console.log('Sever is running');
})