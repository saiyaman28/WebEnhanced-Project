import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './App'
import MerchPage from './pages/Merch'
import GalleryPage from './pages/Gallery'
import MilestonePage from './pages/Milestone'
import AboutPage from './pages/About'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/merch' element={<MerchPage />} />
                <Route path='/gallery' element={<GalleryPage />} />
                <Route path='/milestone' element={<MilestonePage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </Router>
    )
}