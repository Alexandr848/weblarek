import './scss/styles.scss';
import { ProductCatalog } from './models/productCatalog';
import { Customer } from './models/customer';
import { Basket } from './models/basket';
import { apiProducts, apiProd} from './utils/data';
import { ProductService } from './models/productService';
import { TPayment } from './types';

const ProductModel = new ProductCatalog();

ProductModel.saveArrProducts(apiProducts.items);

console.log("Вывод всех продуктов из ProductModel:");
console.log(ProductModel.getArrProducts());
console.log("Вывод продукта по ID из ProductModel:");
const productIdToFind = "854cef69-976d-4c2a-a18c-2aa45046c390";
console.log(ProductModel.getProductById(productIdToFind));

const foundProduct = ProductModel.getProductById(productIdToFind);
console.log("Сохранение продукта для детального просмотра в ProductModel:");
if (foundProduct) {
    ProductModel.saveProductForDetailed(foundProduct);
} else {
    console.log("Продукт с указанным ID не найден.");
}

console.log("Вывод продукта для детального просмотра из ProductModel:");
console.log(ProductModel.getProductForDetailed());

const CustomerModel = new Customer();

CustomerModel.saveDataInModel({
    payment: 'card',
    address: '123 Main St',
    email: 'customer@example.com',
    phone: '123-456-7890'
});
console.log("Вывод данных клиента из CustomerModel:");
console.log(CustomerModel. getDataCustomer());

console.log("Очистка данных клиента в CustomerModel.");
CustomerModel.clearDataCustomer();
console.log("Вывод данных клиента после очистки из CustomerModel:");
console.log(CustomerModel.getDataCustomer());

console.log("Валидация данных клиента:");
console.log(CustomerModel.validationData());

const BasketModel = new Basket();

if (foundProduct) {
    BasketModel.addProductInArrBasket(foundProduct);
} else {
    console.log("Продукт с указанным ID не найден, не удалось добавить в корзину.");
}
console.log("Вывод продуктов в корзине из BasketModel:");
console.log(BasketModel.getProductsInBasket());

console.log("Общая стоимость продуктов в корзине:");
console.log(BasketModel.getPriceProducts());

console.log("Количество продуктов в корзине:");
console.log(BasketModel.getColProducts());

console.log("Проверка наличия продукта в корзине по ID:");
console.log(BasketModel.checkAvailabilityProductInBasket(productIdToFind));

BasketModel.delProductInArrBasket();
console.log("Вывод продуктов в корзине после удаления последнего продукта из BasketModel:");
console.log(BasketModel.getProductsInBasket());

console.log("добавление продукта в корзину из BasketModel:");
if (foundProduct) {
    BasketModel.addProductInArrBasket(foundProduct);
} else {
    console.log("Продукт с указанным ID не найден, не удалось добавить в корзину.");
}
console.log(BasketModel.getProductsInBasket());

console.log("Очистка корзины в BasketModel.");
BasketModel.clearBasket();
console.log("Вывод продуктов в корзине после очистки из BasketModel:");
console.log(BasketModel.getProductsInBasket());

const productService = new ProductService(apiProd);

try {
    const productsResponse = await productService.getProducts();
    console.log("Вывод продуктов из ProductService:");
    console.log(productsResponse);
} catch (error) {
    console.error("Ошибка при получении продуктов из ProductService:", error);
}

try {
    const orderData = {
        customer: {
            payment: 'card' as TPayment,
            address: '123 Main St',
            email: 'customer@example.com',
            phone: '123-456-7890'
        },
        products: BasketModel.getProductsInBasket(),        
        totalAmount: BasketModel.getPriceProducts()
    };

    const orderResponse = await productService.createOrder(orderData);
    console.log("Вывод созданного заказа из ProductService:");
    console.log(orderResponse);
} catch (error) {
    console.error("Ошибка при создании заказа из ProductService:", error);
}
