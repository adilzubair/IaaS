import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RetailerPortal from './pages/RetailerPortal';
import InsurancePortal from './pages/InsurancePortal';
import Login from './pages/Login';
import Layout from './components/Layout';
import AuthWrapper from './components/AuthWrapper';
import Checkout from './pages/Checkout';
import Landing from './pages/Landing';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Layout />}>
            <Route 
              path="retailer" 
              element={
                <AuthWrapper requiredUserType="retailer">
                  <RetailerPortal />
                </AuthWrapper>
              } 
            />
            <Route 
              path="insurance" 
              element={
                <AuthWrapper requiredUserType="insurance">
                  <InsurancePortal />
                </AuthWrapper>
              } 
            />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;