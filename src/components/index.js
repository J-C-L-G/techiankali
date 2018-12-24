import { hot } from 'react-hot-loader';
import App from './App/App.jsx';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default {
    App: (IS_PRODUCTION ? App : hot(module)(App)) //Todo: Change this to prevent load for build
};
