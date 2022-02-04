import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './assets/font-awesome-pro-master/font-awesome-pro-master/font-awesome-pro-master/css/all.css';
import './assets/scss/style.scss';


function List({ data, setdata }) {

  useEffect(() => {
    const list = document.getElementById('list')
    const body = document.getElementById('root')
    const footer = document.querySelector('footer')
    document.onscroll = () => {
      // console.log(document.documentElement.scrollTop, list.offsetTop, list.clientHeight, window.innerHeight, body.offsetHeight)
      const listHeight = list.offsetHeight
      const marginTop = list.offsetTop
      const mgBottom = body.offsetHeight - listHeight - marginTop
      const checkDk = body.offsetHeight - window.innerHeight - mgBottom < document.documentElement.scrollTop
      // console.log(body.offsetHeight - window.innerHeight, document.documentElement.scrollTop,body.offsetHeight - window.innerHeight - 3 -listHeight-marginTop)
      console.log('footer cong thuc' + (body.offsetHeight - listHeight - marginTop), 'footer :' + footer.offsetHeight)
      if (checkDk) {
        const newData = [...data, 9]
        console.log(newData)
        setdata(newData)
        // console.log(listHeight, marginTop)
      }
    }
    return () => {
    }
  }, [data])
  return (
    <ul id='list' >
      {data.map((item, i) => <li key={i}>{i}</li>)}
    </ul>
  )
}

function App() {

  const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

  return (
    <div className="app">

      <List {...{ data, setdata }} />





      {/* <Header />
      <Switch>

        <Route path='/product'>
          <ProductContainer />
        </Route>
        <Route path='/'>
          <StaticPage />
        </Route> */}
      {/* <Route path='/contact'>
          <ContacContainer />
        </Route> */}

      {/* <Route path={'/login'} component={LoginPage} /> */}
      {/* <Route path={'/register'} component={RegisterPage} /> */}
      {/* <Route component={NotFound} />
      </Switch>
      <Footer /> */}
    </div>
  );
}

export default App;
