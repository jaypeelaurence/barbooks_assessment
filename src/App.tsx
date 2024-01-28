import { BrowserRouter } from 'react-router-dom';
import 'assets/styles/App.css';
import Page from 'pages';

const App = () => (
  <BrowserRouter>
    <Page />
  </BrowserRouter>
);

export default App;
