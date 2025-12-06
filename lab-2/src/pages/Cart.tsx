import { useStore } from '../store/store'

export default function Cart() {
    const { cart, removeFromCart, clearCart, getCartTotal, getCartCount } = useStore()
    const total = getCartTotal()
    const count = getCartCount()

    return (
        <div className="container max-w-[1200px] mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">🛒 Корзина</h1>

            {cart.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">Корзина пуста</p>
                    <p className="text-gray-400 mt-2">Добавьте товары из каталога</p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex items-center p-4 border-b border-gray-100 last:border-b-0">
                                        <div className="w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
                                        <div className="flex-1">
                                            <h3 className="font-medium">{item.name}</h3>
                                            <p className="text-gray-500 text-sm">Количество: {item.quantity}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">{item.price * item.quantity} ₽</p>
                                            <p className="text-gray-500 text-sm">{item.price} ₽ × {item.quantity}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="ml-4 text-red-500 hover:text-red-700"
                                            aria-label="Удалить"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={clearCart}
                                className="mt-4 px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors"
                            >
                                Очистить корзину
                            </button>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                                <h2 className="text-xl font-bold mb-4">Итого</h2>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span>Товары ({count})</span>
                                        <span>{total} ₽</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Доставка</span>
                                        <span className="text-green-600">Бесплатно</span>
                                    </div>
                                    <div className="border-t border-gray-300 pt-3 mt-3">
                                        <div className="flex justify-between text-lg font-bold">
                                            <span>К оплате</span>
                                            <span>{total} ₽</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full mt-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                    Перейти к оформлению
                                </button>

                                <p className="text-gray-500 text-sm text-center mt-4">
                                    Нажимая на кнопку, вы соглашаетесь с условиями покупки
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}