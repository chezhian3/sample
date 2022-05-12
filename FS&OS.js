const fs = require('fs');
                 
                    //file sysytem (fs)

             //you want create new (txt) file use fs.writeFile
// fs.writeFile('./app.text', 'hai buddy', (err) => {
//     if (err) throw err;
// });          
             //but appendFile also create a file and append the string or anything else 
fs.appendFile('adding.text', '\nhgokul', (err) => {
    if (err) throw err;
})
        //this is operating system(os)
const os= require('os')
var a=os.userInfo();
// console.log(a.username);