import { useStore } from '../store/store'
import type {Product} from '../data/products'

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const { id, name, price, category } = product
    const { cart, addToCart, removeFromCart, toggleFavorite, isFavorite } = useStore()

    const inCart = cart.some(item => item.id === id)
    const isFav = isFavorite(id)

    const handleAddToCart = () => {
        if (inCart) {
            removeFromCart(id)
        } else {
            addToCart(product)
        }
    }

    const handleToggleFavorite = () => {
        toggleFavorite(id)
    }

    return (
        <div className="card border border-gray-300 rounded-lg overflow-hidden flex flex-col bg-white min-w-0 hover:shadow-md transition-shadow">
            <div className="relative">
                <div className="card-img bg-gray-200 h-40"></div>
                <button
                    onClick={handleToggleFavorite}
                    className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                    aria-label={isFav ? "Удалить из избранного" : "Добавить в избранное"}
                >
                    {isFav ? '❤️' : '🤍'}
                </button>
                <div className="absolute bottom-2 left-2">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {category === 'hoodies' ? 'Худи' : 'Шорты'}
          </span>
                </div>
            </div>
            <div className="card-info p-3 flex flex-col gap-2">
                <p className="price font-semibold">{price} ₽</p>
                <p className="name text-gray-700">{name}</p>
                <button
                    onClick={handleAddToCart}
                    className={`cart-btn py-2 px-4 rounded-lg border transition-colors ${
                        inCart
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50'
                    }`}
                >
                    {inCart ? 'В корзине' : 'В корзину'}
                </button>
            </div>
        </div>
    )
}