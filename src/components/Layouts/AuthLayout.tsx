import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate()

  useEffect(()=> {
    navigate('/login')
  }, [])
    return (
        <div className="app-layout">
          <main className='auth-wrapper'>
            <Outlet />
          </main>
        </div>
      );
}

export default AuthLayout