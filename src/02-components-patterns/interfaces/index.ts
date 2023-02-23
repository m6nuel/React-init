import { Props as ProductBtnProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
    id: string;
    title: string;
    img?: string; 
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;
}

export interface ProductCardHocProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Image:   ( Props: ProductImageProps) => JSX.Element,
    Title:   ( Props: ProductTitleProps) => JSX.Element,
    Buttons: (Props: ProductBtnProps)    => JSX.Element
}