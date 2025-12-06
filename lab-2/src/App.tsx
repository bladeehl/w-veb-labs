import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Outlet />
            <Footer />
            <MobileNav />
        </div>
    )
}

export default App