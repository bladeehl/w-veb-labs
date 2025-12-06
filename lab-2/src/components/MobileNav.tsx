import { Link } from 'react-router-dom'
import { useStore } from '../store/store'

export default function MobileNav() {
    const { getCartCount, getFavoritesCount } = useStore()
    const cartCount = getCartCount()
    const favCount = getFavoritesCount()

    return (
        <nav className="mobile-nav md:hidden flex justify-around items-center border-t border-gray-300 bg-gray-50 fixed bottom-0 left-0 w-full py-2 z-20">
            <Link to="/" className="icon-btn flex flex-col items-center text-xl">
                🏠<span className="text-xs mt-1">Главная</span>
            </Link>

            <Link to="/favorites" className="icon-btn flex flex-col items-center text-xl relative">
                ❤️
                {favCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {favCount}
          </span>
                )}
                <span className="text-xs mt-1">Избранное</span>
            </Link>

            <Link to="/cart" className="icon-btn flex flex-col items-center text-xl relative">
                🛒
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {cartCount}
          </span>
                )}
                <span className="text-xs mt-1">Корзина</span>
            </Link>
        </nav>
    )
}