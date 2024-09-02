import { createRoot } from 'react-dom/client'
import { setupAxios } from './api/axios';

import App from './App'

import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

import './assets/style/index.scss'

setupAxios();

const AppContainer = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
}
createRoot(document.getElementById('root')!).render(<AppContainer/>)
