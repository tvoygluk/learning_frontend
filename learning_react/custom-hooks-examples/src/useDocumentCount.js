import {useEffect, useState} from 'react';


export const useDocumentCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title=`Count ${count}`;

        return () => {
            document.title='REACT';
        }
    },[count])

    const plus = () => {
        setCount((prev) => prev + 1)
    }

    const minus = () => {
        setCount((prev) => prev - 1)
    }

    return {
        count,
        plus,
        minus,
    }
}