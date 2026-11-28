import { IProduct } from '../types';

export class ProductCatalog {
    private products: IProduct[] = [];
    private selectedProduct: IProduct | null = null;

    saveArrProducts(products: IProduct[]): void {
        this.products = [...products];
    }

    getArrProducts(): IProduct[] {
        return this.products;
    }

    getProductById(id: string): IProduct | null {
        const product = this.products.find((product) => product.id === id);
        return product || null;
    }

    saveProductForDetailed(product: IProduct): void {
        this.selectedProduct = product;
    }

    getProductForDetailed(): IProduct | null {
        return this.selectedProduct;
    }

    
}