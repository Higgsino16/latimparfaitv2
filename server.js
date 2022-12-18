var http = require("http");
var url = require('url');
var fs = require('fs');


http.createServer(function (req,res) {
fs.readFile('navbar.html',function(err2,data2){fs.readFile('footer.html',function(err3,data3){fs.readFile('header.html',function(err4,data4){
var q = url.parse(req.url,true);
var filename = '.'+q.pathname;
//console.log(q.pathname);
if (q.pathname=='/'){
    filename='./index.html';
}
fs.readFile(filename,function(err,data){
    if (err){
        res.writeHead(404,{'Content-Type':'text/html'});
        return res.end('404 Not Found');
    }
    
    
    if (filename.endsWith('.html')){
        res.writeHead(200,{'Content-Type':'text/html'});
        // console.log(filename);
        //console.log(a);
        let a = String(data);
        /*a = a.replace('.!!.nav_bar.!!.',`<nav class="w3-bar w3-black">
        <a href="/" class="w3-bar-item w3-button">Home</a>
        <a href="/info.html" class="w3-bar-item w3-button">L'Imparfait en Latin</a>
        <a href="/game.html" class="w3-bar-item w3-button">Quelques jeux pour apprendre</a>
      </nav>`);*/
        a = a.replace(`.!!.nav_bar.!!.`,String(data2));
        /*a = a.replace('.!!.include_style.!!.',`
        <meta name="viewport" content="width=device-width, initial-scale=1">
      
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="/w3.css"> 
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allerta+Stencil">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik+Vinyl"> 


        <style>
          .w3-allerta{
              font-family: 'Allerta Stencil',serif;
          }
          .w3-tangerine {
              font-family: 'Tangerine', serif;
          }
          .w3-rubik{
              font-family: 'Rubik Vinyl',serif;
          }
      </style>
        <link rel='stylesheet' href='/style.css'>
        <link rel="icon" type="image/png" href="/assets/logo.png"/>`);*/
      //console.log(a);
      a = a.replace('.!!.include_head.!!.',String(data4));
        a = a.replace('.!!.footer.!!.',String(data3));
        res.write(a);
    }
    else{
        // console.log(filename);
        res.write(data);
    }
    if (filename.endsWith('text/css')){
        res.writeHead(200,{'Content-Type':'text/css'});
    }
    return res.end();
});
});});});
}).listen(8081);

