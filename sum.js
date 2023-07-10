const http=require('http');
const hostname='127.0.0.1';
const port=9090;
const server =http.createServer((req,res)=>{
const a=40;
const b=20;
const c=a+b;
res.statusCode=200;
res.setHeader('Content-Type','text/plain');
console.log('a:',a);
console.log('b:',b);
res.end(`sum of two numbers:${c}`);
});
server.listen(port,hostname,()=>{
console.log(`Server running at http://${hostname}:${port}/`);
});