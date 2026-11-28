export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';
export type TPayment = 'cash' | 'card';

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}
export interface IProduct {
    id: string;
    title: string;
    image: string;
    category: string;
    price: number | null;
    description: string;
}

export interface IBuyer {
    payment: TPayment;
    address: string;
    email: string;
    phone: string;
} 

export interface ProductResponse { 
    total: number; 
    items: IProduct[]; 
}

export interface OrderRequest { 
    customer: IBuyer; 
    products: IProduct[]; 
    totalAmount: number; 
}

export interface OrderResponse { 
    orderId: string; 
    status: 'success' | 'error'; 
    amount: number; }