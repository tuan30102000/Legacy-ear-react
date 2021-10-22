import { Route, Switch } from 'react-router';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './assets/font-awesome-pro-master/font-awesome-pro-master/font-awesome-pro-master/css/all.css';
import './assets/scss/style.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import LoginPage from './Features/AuthenticationContainer/page/LoginPage';
import RegisterPage from './Features/AuthenticationContainer/page/RegisterPage';
import ContacContainer from './Features/ContactContainer';
import HomeContainer from './Features/HomeContainer';
import ProductContainer from './Features/ProductContainer';

function App() {

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomeContainer />
        </Route>
        <Route path='/product'>
          <ProductContainer />
        </Route>
        <Route path='/contact'>
          <ContacContainer />
        </Route>

        <Route path={'/login'} component={LoginPage} />
        <Route path={'/register'} component={RegisterPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
