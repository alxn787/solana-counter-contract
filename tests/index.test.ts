import * as borsh from 'borsh'

class CounterAccount {
    count : number;

    constructor({count}:{count:number}){
        this.count = count;
    }
}

const schema : borsh.Schema = {
    struct : {
        Count: 'u32'
    }
}