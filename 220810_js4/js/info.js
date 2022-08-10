


export class info{
    constructor(){
        this.images_path = "../images/";
        this.images_name = [
            "karina1.jpg", "karina2.jpg", "karina3.jpg","karina4.jpg", 
            "winter1.jpg", "winter2.jpg", "winter3.jpg", "winter4.jpg", 
            "sana1.jpg", "sana2.jpg", "sana3.jpg", "sana4.jpg"
        ];
        this.data = [];
        init_data();
    }
    

    init_data(){
        const ranIdx =  this.get_ranIndex();
        for(let i = 0; i < 6; i++){
            const name = this.images_name[ranIdx[i]];
            const path = this.images_path + name;
            this.data.push({
                name:name,
                path:path,
                id:ranIdx[i],
                check:true,
                done:false,
            });
            this.data.push({
                name:name,
                path:path,
                id:ranIdx[i+1],
                check:true,
                done:false,
            });
        }
        console.log(this.data);
    }

    get_ranIndex(){
        const temp = [];
        while(temp.length <= 12){
            const rand = Math.floor(Math.random() * 12);
            if(temp.indexOf(rand) !== -1) continue;
            temp.push(rand);
        }
        console.log(temp);
        return temp;
    }
}