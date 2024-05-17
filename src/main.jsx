import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import style from './pages/style/style.css?inLine'

import App from './App';
import Error from './pages/Error';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/Skills',
        element: <Skills />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
