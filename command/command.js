import fs, { readFile } from 'node:fs'
export function add(cache){
    const description=cache[2];
    const id=cache[1];
    const data={"id":id,"description":description}
    const linetoappend=JSON.stringify(data)+"\n"
    fs.appendFile('task.jsonl',linetoappend,'utf8', (err) => {
    if (err) throw err;
    console.log('Data added successfully!');
});
    
}
export function update(){

}
export function done(){

}
export function del(){

}
export  function read(){
   try{
    fs.readFile('task.jsonl','utf8',(err,data)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log(data)
    })
    
   }catch(error){
    console.log("Ops!Error ocurred while reading the data",error);
   }

}