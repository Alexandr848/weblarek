import {IProduct} from '../types';

export class Basket {
    private selectedProducts: IProduct[] = [];

    getProductsInBasket(): IProduct[] {
        return this.selectedProducts;
    }

    addProductInArrBasket(product: IProduct): void {
        this.selectedProducts.push(product);
    }

    delProductInArrBasket(): void {
        this.selectedProducts.pop();
    }

    clearBasket(): void {
        this.selectedProducts = [];
    }

    getPriceProducts(): number {
        return this.selectedProducts.reduce((total, product) => {
            if (product.price) {
                return total + product.price;
            }
            return total;
        }, 0);
    }

    getColProducts(): number {
        return this.selectedProducts.length;
    }

    checkAvailabilityProductInBasket(productId: string): boolean {
        return this.selectedProducts.some((product) => product.id === productId);
    }
}