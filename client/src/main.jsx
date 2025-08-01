import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home/index.jsx'
import Shop from './pages/Shop/index.jsx'
import ProductList from './components/ProductList/index.jsx'
import ProductDetail from './components/ProductDetail/index.jsx'
import { CartProvider } from './components/CartContext/index.jsx'
import Cart from './pages/Cart/index.jsx'
import Error from './pages/Error'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/shop/:category',
        element: <ProductList />,
      },
      {
        path: '/product/:productId',
        element: <ProductDetail />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //wrap the app in CartProvider so that cart state is available globally
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
)
