import { useState } from 'react';

export const useProduct = () => {
    const [counter, setCounter] = useState(0);

    const increaseBy = ( value: number ) => {
        setCounter( prev => Math.max( prev + value, 0 ) ); //incremento y decremento min valor 0
    }
    return {
        counter,
        increaseBy
    }
}