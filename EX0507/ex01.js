const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hello');
})
server.listen(8005,()=>{
    console.log('8005로 실행되었습니다.');
})