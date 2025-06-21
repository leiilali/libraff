import { createRoot } from 'react-dom/client'
import '@fontsource/nunito';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import WishContext from './context/WishContext';
import BasketContext from './context/BasketContext';


createRoot(document.getElementById('root')).render(
    <BasketContext>
        <WishContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </WishContext>
    </BasketContext>
)
