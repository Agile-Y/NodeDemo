let http = require('http');

let sever = http.createServer();

sever.on('request',(req,res)=>{
        
        let url = req.url;

        if(url === '/plain'){
                //文字转码 
                res.setHeader('Content-Type', 'text/plain ; charset=utf-8');
                res.end('你好node');
        }else if(url === '/html'){
            res.setHeader('Content-Type', 'text/html ; charset=utf-8');
                res.end('<p>你好html <a href="">点击</a> </p>');
        }


});

sever.listen(3000,()=>{
    console.log('Sever is running');
})