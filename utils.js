const fs=require('fs');
const appendFile = (data, file) => {
    fs.readFile(file, 'utf8',(err, data) =>{
        if (err){
            console.log(err)
            } 
        else {
            try{
                const ans = JSON.parse(data);
            }
            catch{
                ans=[]
            }
            ans.push(data)
            fs.writeFile(file, JSON.stringify(data), (err, data) => {
                err ? console.log(err): console.log('data has been written');
            })
        }
        
    })
}