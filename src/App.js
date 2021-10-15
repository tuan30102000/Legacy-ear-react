import './assets/font-awesome-pro-master/font-awesome-pro-master/font-awesome-pro-master/css/all.css';
import './assets/scss/style.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeContainer from './Features/HomePage';

function App() {

  return (
    <div className="app">
      <Header />
      <HomeContainer />
      <Footer />
    </div>
  );
}

export default App;
