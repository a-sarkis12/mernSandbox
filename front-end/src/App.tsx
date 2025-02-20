
import './App.css'
import AboutPage from './pages/aboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = [{
  path: '/',
  element: <HomePage />
},{
  path: '/about',
  element: <AboutPage />
},{
  path: '/articles',
  element: <ArticlesListPage />
},{
  path: '/articles/individual',
  element: <ArticlePage />
}]

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
