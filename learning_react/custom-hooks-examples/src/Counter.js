import React from 'react';
import {useDocumentCount} from './useDocumentCount'

export const Counter = () => {

    const {count, plus, minus} = useDocumentCount();


    return (
        <div>
            <p>{count}</p>
            <button onClick={() => minus()}>- 1</button>
            <button onClick={() => plus()}>+ 1</button>
        </div>
    );
}
