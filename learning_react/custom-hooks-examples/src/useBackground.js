import {useEffect} from 'react';


export const useBackground = () => {

    useEffect(() => {

        const keyupHendler = (e) => {
            if (e.key === 'f') {
                document.body.style.backgroundColor = 'brown';
            } else {
                document.body.style.backgroundColor = 'white';
            }
        }

        window.addEventListener('keyup', keyupHendler);

        return () => {
            window.removeEventListener('keyup', keyupHendler);
            document.body.style.backgroundColor = 'white';
        }

    },[])
}