import { useStore } from '../store/store'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Favorites() {
    const { favorites, getFavoritesCount } = useStore()

    const favProducts = products.filter(product =>
        product && favorites.includes(product.id)
    )

    const count = getFavoritesCount()

    if (favProducts.length !== count) {
        console.warn('Несоответствие: favorites в сторе:', favorites)
        console.warn('Найденные продукты:', favProducts.map(p => p.id))
    }

    return (
        <div className="container max-w-[1200px] mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">❤️ Избранное</h1>

            {count === 0 ? (
                <div className="text-center py-12">
                    <div className="text-4xl mb-4">🤍</div>
                    <p className="text-gray-500 text-lg">В избранном пока пусто</p>
                    <p className="text-gray-400 mt-2">Добавьте товары, нажав на сердечко</p>
                </div>
            ) : (
                <>
                    <p className="text-gray-600 mb-6">
                        Товаров в избранном: {count} (найдено: {favProducts.length})
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {favProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {favProducts.length === 0 && count > 0 && (
                        <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                            <p className="text-yellow-700">
                                ⚠️ В избранном есть товары, но они не найдены в каталоге.
                                Возможно, проблема с данными.
                            </p>
                        </div>
                    )}

                    {favProducts.length > 0 && (
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <p className="text-blue-700">
                                💡 Все товары из избранного также есть в основном каталоге
                            </p>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}