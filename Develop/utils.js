const fs = require('fs');

const appendFile = (dataToAppend, file) => {
    fs.readFile(file, 'utf8',(err, data) =>{
        if (err){
            console.log(err)
            } 
        else {
            try{
                const existingFileData = JSON.parse(data);
                existingFileData.push(dataToAppend);
                fs.writeFile(file, JSON.stringify(existingFileData), (err, data) => {
                    err ? console.log(err): console.log('File has been updated with new data!');
                })
            }
            catch{
                ans=[]
            }

        }
        
    })
}