import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../cutomHookRedux/CustomHook';

function PrivateRouter() {
  const auth = useAuth();

  return auth || localStorage.getItem('access_token') ? (
    <Outlet />
  ) : (
    <Navigate to="posts" />
  );
}

export default PrivateRouter;
