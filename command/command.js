import fs from 'node:fs'
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
export function read(){

}