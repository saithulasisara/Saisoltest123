let http=require('http');
let fs=require('fs');

let handleRequest=(request, response) => {
      response.writeHead(200, {
	        'Content-Type': 'text/html'
	   });
	   fs.readFile('./index.html',null,function(error, data){
	      if(error){
		       response.WriteHead(404);
			   response.Write('file not found');
			} else{
			       response.Write(data);
		    }
			response.end();
		});
};

http.createServer(handleRequest).listen(8000);