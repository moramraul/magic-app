import {createBrowserRouter } from 'react-router-dom';
import RequestForm from '../Components/RequestForm';
import Layout from '../Layout';
import Home from '../Home';
import ImportList from '../Components/ImportList';
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
          },
          {
            path: "/export",
            element: <ImportList />
          }
        ]
      }
  ]);
  
export default router;