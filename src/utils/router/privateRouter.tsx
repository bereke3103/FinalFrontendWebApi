import { Outlet, Navigate } from 'react-router-dom'

function PrivateRouter() {
  const auth = true

  return auth ? <Outlet /> : <Navigate to="login" />
}

export default PrivateRouter
