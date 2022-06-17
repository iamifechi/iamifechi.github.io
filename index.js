//Importing modules
const http = require('http')
const fs = require('fs')

//PORT
const port = process.env.PORT || 8080;

//Creating server
const server = http.createServer((req, res) => {
	let page = 
    req.url === '/'? 'index.html'
   :req.url === '/about'? 'about.html'
  :req.url === '/contact'? 'contact.html' : undefined;

	if(page) 
		serve(res, page);
})

//Serving pages
const serve = (res, page) =>{
  	fs.stat(`./${page}`, (err, stats) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
  		if(stats) {
		  	fs.createReadStream(page).pipe(res);
  		} else {
  			res.statusCode = 404;
  			res.end('Sorry, page not found!');
  		}
  	});
}

//Listen to server
server.listen(port,()=>{
  console.log(`Server is listening on port: ${port} `)
})