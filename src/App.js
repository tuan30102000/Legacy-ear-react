import { Route, Switch } from 'react-router';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './assets/font-awesome-pro-master/font-awesome-pro-master/font-awesome-pro-master/css/all.css';
import './assets/scss/style.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import method from './Constants/method';
import ProductContainer from './Features/ProductContainer';
import StaticPage from './Features/StaticPage';


function App() {

console.log(method.listPaginationBtn(17, 8, 40))
  return (
    <div className="app ">
     
      <Header />
      <Switch>

        <Route path='/product'>
          <ProductContainer />
        </Route>
        <Route path='/'>
          <StaticPage />
        </Route>
        {/* <Route path='/contact'>
          <ContacContainer />
        </Route> */}

        {/* <Route path={'/login'} component={LoginPage} /> */}
        {/* <Route path={'/register'} component={RegisterPage} /> */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
