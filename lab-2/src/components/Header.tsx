import { Link } from 'react-router-dom'
import { useStore } from '../store/store'

export default function Header() {
    const { getCartCount, getFavoritesCount } = useStore()
    const cartCount = getCartCount()
    const favCount = getFavoritesCount()

    return (
        <header className="header border-b border-gray-300 bg-gray-50 sticky top-0 z-10">
            <div className="header-inner max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-between gap-2">
                <Link to="/" className="icon-btn text-xl" aria-label="Главная">
                    🏠
                </Link>

                <input
                    className="search flex-1 px-3 py-2 border border-gray-300 rounded-md"
                    type="text"
                    placeholder="Поиск..."
                    aria-label="Поиск товаров"
                />

                <div className="header-icons flex gap-4">
                    <Link to="/favorites" className="relative">
                        <button className="icon-btn text-xl" aria-label="Избранное">
                            ❤️
                        </button>
                        {favCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favCount}
              </span>
                        )}
                    </Link>

                    <Link to="/cart" className="relative">
                        <button className="icon-btn text-xl" aria-label="Корзина">
                            🛒
                        </button>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    )
}