import {createBrowserRouter } from 'react-router-dom';
import RequestForm from '../Components/RequestForm';
import Layout from '../Layout';
import Home from '../Home';
const router = createBrowserRouter([
    {
        element: <Layout  />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/form",
            element: <RequestForm />
          }
        ]
      }
  ]);
  
export default router;