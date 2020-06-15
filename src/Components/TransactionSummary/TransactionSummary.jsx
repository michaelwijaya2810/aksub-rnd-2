import React from 'react';

const TransactionSummary=({summary})=>{
    return(
        <div>
            {summary.map((data, index) => (
        <div key={index}>{`${data.name} - ${data.total} - ${data.stock}`}</div>
        ))}
        </div>
    );
};

export default TransactionSummary;