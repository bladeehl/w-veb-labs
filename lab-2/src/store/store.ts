import { create } from 'zustand'
import type {Product} from '../data/products'

interface CartItem extends Product {
    quantity: number
}

interface Store {
    cart: CartItem[]
    addToCart: (product: Product) => void
    removeFromCart: (productId: number) => void
    clearCart: () => void
    getCartTotal: () => number
    getCartCount: () => number

    favorites: number[] // массив ID товаров
    toggleFavorite: (productId: number) => void
    isFavorite: (productId: number) => boolean
    getFavoritesCount: () => number
}

export const useStore = create<Store>((set, get) => ({
    cart: [],
    favorites: [],

    addToCart: (product) => {
        set((state) => {
            const existingItem = state.cart.find(item => item.id === product.id)

            if (existingItem) {
                return {
                    cart: state.cart.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                }
            } else {
                return {
                    cart: [...state.cart, { ...product, quantity: 1 }]
                }
            }
        })
    },

    removeFromCart: (productId) => {
        set((state) => ({
            cart: state.cart.filter(item => item.id !== productId)
        }))
    },

    clearCart: () => {
        set({ cart: [] })
    },

    getCartTotal: () => {
        const { cart } = get()
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    },

    getCartCount: () => {
        const { cart } = get()
        return cart.reduce((count, item) => count + item.quantity, 0)
    },

    toggleFavorite: (productId) => {
        set((state) => {
            const isFav = state.favorites.includes(productId)

            if (isFav) {
                return {
                    favorites: state.favorites.filter(id => id !== productId)
                }
            } else {
                return {
                    favorites: [...state.favorites, productId]
                }
            }
        })
    },

    isFavorite: (productId) => {
        return get().favorites.includes(productId)
    },

    getFavoritesCount: () => {
        return get().favorites.length
    }
}))