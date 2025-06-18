import * as borsh from 'borsh'

class CounterAccount {
    count : number;

    constructor({count}:{count:number}){
        this.count = count;
    }
}

export const schema : borsh.Schema = {
    struct : {
        count: 'u32'
    }
}

export const COUNTER_SIZE = borsh.serialize(schema,new CounterAccount({count:20})).length;
console.log(borsh.serialize(schema,new CounterAccount({count:20})));