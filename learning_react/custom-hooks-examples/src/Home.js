import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useUpdateLogger } from './useUpdateLogger';

export const Home = () => {

    const [name, setName] = useLocalStorage('name', '' )
    useUpdateLogger(name)
    
    return (
        <div>
           <h1>Home</h1>
           <input
            type='text'
            value={name}
            onChange={e => setName(prev => prev = e.target.value)}
           />

        </div>
    );
}
