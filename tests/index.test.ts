import {expect, test} from 'bun:test';
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from '@solana/web3.js';
import { COUNTER_SIZE, schema } from './types';
import * as borsh from 'borsh';

let adminacc = Keypair.generate()
let dataacc = Keypair.generate()

const programId = new PublicKey('9zKDPAfgsJVh3rTjs4uD4tJv7iWxzdpFEmwwyyXCT9Lo')

const connection = new Connection('http://localhost:8899');


test("acount is initialized", async()=>{

const txn = await connection.requestAirdrop(adminacc.publicKey,1*LAMPORTS_PER_SOL);
await connection.confirmTransaction(txn)
const data = await connection.getAccountInfo(adminacc.publicKey);
const lamports = await connection.getMinimumBalanceForRentExemption(COUNTER_SIZE);

const ix = SystemProgram.createAccount({
    fromPubkey:adminacc.publicKey,
    lamports,
    space:COUNTER_SIZE,
    programId,
    newAccountPubkey:dataacc.publicKey
})

const transaction = new Transaction();
transaction.add(ix);
const signature = await connection.sendTransaction(transaction,[adminacc,dataacc]);
await connection.confirmTransaction(signature);
console.log(dataacc.publicKey.toBase58());

const dataAccountInfo = await connection.getAccountInfo(dataacc.publicKey);
const count = borsh.deserialize(schema,dataAccountInfo?.data);
console.log(count?.count);
})
