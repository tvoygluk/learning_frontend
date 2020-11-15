import {useEffect, useState} from 'react';


export const useDocumentCount = (initialCount) => {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        document.title=`Count ${count}`;

        return () => {
            document.title='REACT';
        }
    },[count])

    const plus = (num) => {
        setCount((prev) => prev + num)
    }

    const minus = (num) => {
        setCount((prev) => prev - num)
    }

    return {
        count,
        plus,
        minus,
    }
}