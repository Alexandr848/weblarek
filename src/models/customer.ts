import { IBuyer } from '../types';

export class Customer {
    private data: IBuyer = {
        payment: 'card',
        address: '',
        email: '',
        phone: ''
    }

    saveDataInModel(data: IBuyer): void {
        this.data = data;
    }

    getDataCustomer(): IBuyer {
        return this.data;
    }

    clearDataCustomer(): void {
        this.data = {
            payment: 'card',
            address: '',
            email: '',
            phone: ''
        }
    }

    validationData(): {
    isValid: boolean;
    errors: {
      payment?: string;
      address?: string;
      phone?: string;
      email?: string;
    };
  } {
    const errors: Partial<Record<keyof IBuyer, string>> = {};

    // Валидация payment
    if (!this.data.payment || this.data.payment === undefined) {
      errors.payment = 'Необходимо выбрать способ оплаты';
    }

    // Валидация address
    if (!this.data.address || this.data.address.trim() === '') {
      errors.address = 'Необходимо указать адрес доставки';
    }

    // Валидация phone
    if (!this.data.phone || this.data.phone.trim() === '') {
      errors.phone = 'Необходимо указать номер телефона';
    }

    // Валидация email
    if (!this.data.email || this.data.email.trim() === '') {
      errors.email = 'Необходимо указать email';
    } else {
      // Базовая проверка формата email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.data.email)) {
        errors.email = 'Некорректный формат email';
      }
    }

    // Определяем общую валидность: true, если ошибок нет
    const isValid = Object.keys(errors).length === 0;

    return {
      isValid,
      errors
    };
  }
} 
