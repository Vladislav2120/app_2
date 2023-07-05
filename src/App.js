import './App.scss'
import './styles/text.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeaderPage } from './pages/header'
import HomePage from './pages/home'
import AboutUs from './pages/about'
import Partners from './pages/Partneram'
import Contacts from './pages/contacts'
import News from './pages/news'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage />
        <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<AboutUs />} />
        <Route path={'/partneram'} element={<Partners />} />
        <Route path={'/contacts'} element={<Contacts />} />
        <Route path={'/news'} element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
