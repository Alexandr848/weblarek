import {IApi} from '../types';
import {ProductResponse, OrderRequest, OrderResponse} from '../types';

export class ProductService {
    private api: IApi;

    constructor(api: IApi) {
        this.api = api;
    }

    async getProducts(): Promise<ProductResponse> {
        return this.api.get<ProductResponse>('/products/');
    }

    async createOrder(orderData: OrderRequest): Promise<OrderResponse> {
        return this.api.post<OrderResponse>('/order/', orderData);
    }
}