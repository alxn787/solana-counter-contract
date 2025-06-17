use solana_program::{
    account_info::{AccountInfo,next_account_info},
        entrypoint::ProgramResult,entrypoint,
        pubkey::Pubkey, 
        msg
};

entrypoint!(counter_contract);

pub fn counter_contract(
    program_id: &Pubkey,
    acoounts: &[AccountInfo],
    instruction_data: &[u8]
)-> ProgramResult{
    Ok(())
}