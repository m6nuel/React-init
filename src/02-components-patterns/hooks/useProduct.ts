import { useEffect, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/index';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}

export const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {
    
    const [counter, setCounter] = useState( value );

    // const isControlled = useRef( !!onChange ); version alternativa
    
    const increaseBy = ( value: number ) => {

        // if (isControlled.current) { version alternativa
        //     return onChange!({ count: value, product })
        // }
        
        const newValue = Math.max( counter + value, 0 );
        
        setCounter( newValue ); //incremento y decremento min valor 0
        
        onChange && onChange( { count: newValue, product } );
    }

    useEffect(() => {
        setCounter(value)
    }, [value])
    

    return {
        counter,
        increaseBy
    }
}