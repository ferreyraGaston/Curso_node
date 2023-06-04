const fs = require('fs')

fs.readFile("package.json","utf-8",(err,data)=> {
    if(err)
    {
        console.error("Hay un error ",err);
    }
    else
    {
        console.log("Data: ",data);
    }
});

try{
    const data= fs.readFileSync("package.json","utf-8");
    console.log("Data Sync: \n",data);
}
catch(err){
    console.error("Hay un error ",err);
}