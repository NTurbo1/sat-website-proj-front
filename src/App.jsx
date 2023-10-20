import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { routes } from './utils/router';
import AuthProvider from './components/auth/AuthProvider';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        {routes}
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App