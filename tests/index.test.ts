import {expect, test} from 'bun:test';
import { Connection, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';
import { COUNTER_SIZE } from './types';

let adminacc = Keypair.generate()
let dataacc = Keypair.generate()

const connection = new Connection('http://localhost:8899');
const txn = await connection.requestAirdrop(adminacc.publicKey,1*LAMPORTS_PER_SOL);
await connection.confirmTransaction(txn)
const data = await connection.getAccountInfo(adminacc.publicKey);
const lamports = await connection.getMinimumBalanceForRentExemption(COUNTER_SIZE);
console.log(data);


test("acount is initialized", ()=>{
    expect(1).toBe(1);
})