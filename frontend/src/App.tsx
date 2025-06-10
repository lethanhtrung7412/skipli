import { BrowserRouter, Route, Routes } from 'react-router'

import './App.css'
import { PhoneLogin } from './components/auth/phoneLogin'
import { PhoneVerify } from './components/auth/phoneVerify'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="owner">
          <Route index element={<PhoneLogin />} />
          <Route path="verify" element={<PhoneVerify />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
