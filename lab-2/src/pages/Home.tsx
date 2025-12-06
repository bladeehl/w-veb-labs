import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
    const hoodies = products.filter(p => p.category === 'hoodies')
    const shorts = products.filter(p => p.category === 'shorts')

    return (
        <main className="container max-w-[1200px] mx-auto px-4 py-8">
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Худи</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {hoodies.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6">Шорты</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {shorts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}