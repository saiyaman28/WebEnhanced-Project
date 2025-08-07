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
                <Route path='/WebEnhanced-Project/' element={<LandingPage />} />
                <Route path='/WebEnhanced-Project/merch' element={<MerchPage />} />
                <Route path='/WebEnhanced-Project/gallery' element={<GalleryPage />} />
                <Route path='/WebEnhanced-Project/milestone' element={<MilestonePage />} />
                <Route path='/WebEnhanced-Project/about' element={<AboutPage />} />
            </Routes>
        </Router>
    )
}