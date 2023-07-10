let http=require('http');
let fs=require('fs');

let handleRequest=(request,response) => {
      response.WriteHead(200, {
	        'Content-Type': 'test/html'
	   });
	   fs.readfile('./index.htm',null,function(error,data){
	      if(error){
		       response.WriteHead(404);
			   response.Write('file not found');
			} else{
			       reponse.Write(data);
		    }
			response.end();
		});
};

http.createServer(handleRequest).listen(8000);