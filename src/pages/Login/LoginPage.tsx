import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { loginThunk } from "../../store/thunks/auth.thunk";
import { ILogin } from "../../store/types/auth.types";
import { selectIsAuthenticated } from "../../store/slices/auth.slice";

import './LoginPAge.scss'

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const isAuthenticated = useAppSelector(selectIsAuthenticated)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')

        if (!email || !password) {
        setError('Please fill in all fields')
        return
        }

        const loginInfo: ILogin = {
            email,
            password
          };
        dispatch(loginThunk(loginInfo))
        console.log('Login attempt with:', { email, password })
        navigate("/");
    }

    useEffect(() => {
        if (isAuthenticated) {
          <Navigate to='/' replace/>;
          console.log('navigating to /')
        }
      }, [isAuthenticated, navigate]);

    return (
    <div className="login-wrapper">
        <div className="login-header">
          <h2 className="login-title">Sign in to your account</h2>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              id="email"
              name="user_email_pomodoro"
              type="email"
              autoComplete='off'
              required
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="user_password_pomodoro"
              type="password"
              autoComplete='off'
              required
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
      
          {error && (
            <div className="error-message" role="alert">
              <svg className="error-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Error</span>
              <div>
                <span className="error-text">{error}</span>
              </div>
            </div>
          )}
      
          <div>
            <button type="submit" className="submit-button">
              Sign in
            </button>
          </div>
        </form>
        <div className="create-password">
          <Link to="/register" className="create-account-link">
            Forgot your password?
          </Link>
        </div>
      </div>
    )
};

export default LoginPage;