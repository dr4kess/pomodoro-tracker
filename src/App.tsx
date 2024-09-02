import { useRoutes } from 'react-router-dom'

import { useAppSelector } from './hooks/hooks'
import { selectIsAuthenticated } from './store/slices/auth.slice'
import { getValidRoutes } from './routes/routes.helper'


function App() {
  return <AppRoutes/>
}

const AppRoutes: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuthenticated);
  return useRoutes(getValidRoutes(isAuth));
}

export default App
