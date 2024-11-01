import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Login from './pages/login/login';
import SharedDashboardLayout from './layouts/SharedDashboardLayout';
import Users from './pages/users/users';
import UserDetails from './pages/user-details/user-details';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<SharedDashboardLayout />}>
          <Route index element={<Users />} />
          <Route path='details' element={<UserDetails />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
