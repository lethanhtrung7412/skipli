import { BrowserRouter, Route, Routes } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { PhoneLogin } from './components/auth/phoneLogin'
import { PhoneVerify } from './components/auth/phoneVerify'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="owner">
            <Route index element={<PhoneLogin />} />
            <Route path="verify" element={<PhoneVerify />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
