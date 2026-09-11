import fs from 'node:fs';
let data_ob = [];
export function add(cache) {
    const id = cache[1];
    const description = cache[2];
    const filePath = 'task.json';
    if (fs.existsSync(filePath)) {
        const ata = fs.readFileSync(filePath, 'utf8').trim();
        if (ata) {
            try {
                const parsedData = JSON.parse(ata);
                data_ob = Array.isArray(parsedData) ? parsedData : [];
                const match =data_ob.find(val=>val["id"]===id)
                if(match) throw new Error(`Duplicate Id Exists at Id ${id}`)
            } catch (e) {
                if (e.message.includes("Duplicate Id Exists")) {
                console.error(e.message);
                return;
                
            }
            data_ob = [];
        }
    }
}
    data_ob.push({ "id": id, "description": description,"status":"in-progress","CreateAt":new Date(),"UpdateAt":new Date()});
    fs.writeFileSync(filePath, JSON.stringify(data_ob, null, 2), 'utf8');
    console.log(JSON.stringify(data_ob));
}
export function update(cache){
      const id = cache[1];
    const description = cache[2];
    const filePath = 'task.json';
    if (fs.existsSync(filePath)) {
        const ata = fs.readFileSync(filePath, 'utf8').trim();
        if (ata) {
            try {
                const parsedData = JSON.parse(ata);
                data_ob = Array.isArray(parsedData) ? parsedData : []; // checking if it is parseData is an array or not
                data_ob.map((val,index)=>{
                if(val["id"]==id){
                    if(val["description"]==description) {
                        throw new Error("Same description than previous");
                    }
                     val["description"]=description
                     val["UpdateAt"]=new Date()
                }
                else{
                    throw new Error("No such id found");
                }
    })
    fs.writeFileSync(filePath, JSON.stringify(data_ob, null, 2), 'utf8');
    console.log(data_ob);
            } catch (e) {
                if(e.message.includes("Same description than previous")){
                     console.error(e.message);
                return;
                }
                if(e.message.includes("No such id found")){
                    console.error(e.message);
                return;
                }
                data_ob = [];
            }
        }
    }
}
export function mark(cache){
    const id =cache[1];
    const status=cache[2]
    const filePath = 'task.json';
    if (fs.existsSync(filePath)) {
        const ata = fs.readFileSync(filePath, 'utf8').trim();
        if (ata) {
            try {
                const parsedData = JSON.parse(ata);
                data_ob = Array.isArray(parsedData) ? parsedData : []; 
                data_ob.map((val,index)=>{
                if(val["id"]==id&&(String(status)=="done"||String(status)=="todo")){
                     val["status"]=String(status)
                     val["UpdateAt"]=new Date
                }
    })
    fs.writeFileSync(filePath, JSON.stringify(data_ob, null, 2), 'utf8');
    console.log(data_ob);
            } catch (e) {
                data_ob = [];
            }
        }
    }
}
export function del(cache){
    const id=cache[1];
    const filePath = 'task.json';
    if (fs.existsSync(filePath)) {
        const ata = fs.readFileSync(filePath, 'utf8').trim();
        if (ata) {
            try {
                const parsedData = JSON.parse(ata);
                data_ob = Array.isArray(parsedData) ? parsedData : []; 
                data_ob.map((val,index)=>{
                if(val["id"]==id){
                     data_ob.filter(val=>val["id"]!==id)
                }
    })
            } catch (e) {
                data_ob = [];
            }
        }
    }
}
export  function read(cache){
   try{
     const filePath = 'task.json';
    if (fs.existsSync(filePath)) {
        const ata = fs.readFileSync(filePath, 'utf8').trim();
        if (ata) {
            try {
                const parsedData = JSON.parse(ata);
                data_ob = Array.isArray(parsedData) ? parsedData : [];
            } catch (e) {
                data_ob = [];
            }
        }
    }
    console.log(data_ob);
   }catch(error){
    console.log("Ops!Error ocurred while reading the data",error);
   }

}
