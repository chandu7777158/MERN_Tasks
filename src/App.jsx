import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import DisplayFormData from './components/DisplayFormData'

function App() {
  const navItems = [
    { label: 'Form Data', to: '/form-data' },
  ]

  return (
    <div className="">
      <Navbar navItems={navItems} />

      <main className="pb-12">
        <Routes>
          <Route path="/form-data" element={<DisplayFormData />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
