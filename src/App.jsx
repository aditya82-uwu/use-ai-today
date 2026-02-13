import { Routes, Route, Link } from "react-router-dom"
import Header from './components/Header'
import HomePage from "./pages/Home/HomePage"
import AboutPage from "./pages/AboutPage"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Important */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

