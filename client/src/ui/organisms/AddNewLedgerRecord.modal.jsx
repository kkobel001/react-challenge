import React from 'react';
import Modal from '../molecules/modal/Modal';


export const AddNewLedgerRecord = ({type, ...props}) => {
    return (
        <Modal description= { type === "INCOME" ? "Dodaj wpływ" : "Dodaj wydatek"} />
    )
}