#!/usr/bin/env node
import { argv } from 'node:process';
import {add,done,del,update,read} from "../task_tracker(jst chill')/command/command.js"
let cache=[];
argv.forEach((val, index) => {
    if(index>=2) cache.push(val)
});
const command={add:add,done:done,delete:del,update:update,read:read}
if (cache[0]==command.read) {
    read(cache);
}
const hashed_key=Object.keys(command).find(key=>key.includes(cache[0]))

if(hashed_key){
    const cmd=command[hashed_key]
    cmd(cache);
}else{
    console.log("fatal:incorrect command")
}
export default cache