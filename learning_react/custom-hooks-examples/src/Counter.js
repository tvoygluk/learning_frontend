import React, { useEffect } from 'react';
import { useBackground } from './useBackground';
import { useDocumentCount } from './useDocumentCount'

export const Counter = () => {

    useBackground();
    
    const {count, plus, minus} = useDocumentCount(1000);

    const num = 7;

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => minus(num)}>- {num}</button>
            <button onClick={() => plus(num)}>+ {num}</button>
        </div>
    );
}
