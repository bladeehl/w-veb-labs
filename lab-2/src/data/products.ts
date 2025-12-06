export interface Product {
    id: number
    name: string
    price: number
    category: 'hoodies' | 'shorts'
}

export const products: Product[] = [
    // Худи
    { id: 1, name: 'Худи с принтом', price: 999, category: 'hoodies' },
    { id: 2, name: 'Худи с узором', price: 1199, category: 'hoodies' },
    { id: 3, name: 'Худи с надписью', price: 1099, category: 'hoodies' },
    { id: 4, name: 'Белое худи', price: 1299, category: 'hoodies' },
    { id: 5, name: 'Худи базовое', price: 899, category: 'hoodies' },
    { id: 6, name: 'Худи oversize', price: 1499, category: 'hoodies' },

    // Шорты
    { id: 7, name: 'Широкие шорты', price: 799, category: 'shorts' },
    { id: 8, name: 'Шорты с принтом', price: 999, category: 'shorts' },
    { id: 9, name: 'Спортивные шорты', price: 899, category: 'shorts' },
    { id: 10, name: 'Хлопковые шорты', price: 699, category: 'shorts' },
    { id: 11, name: 'Шорты с узором', price: 1099, category: 'shorts' },
    { id: 12, name: 'Серые шорты', price: 999, category: 'shorts' },
]