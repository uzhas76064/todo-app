import './index.css';
import App from './App';
import rootReducer from './reducers'
import {Provider} from 'react-redux';
import {legacy_createStore} from "redux";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root') as HTMLElement)
const store = legacy_createStore(rootReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);