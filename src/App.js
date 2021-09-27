import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignPage from './pages/signin-signup/sign.component';
import { Route ,Switch } from 'react-router-dom'



function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignPage} />
      </Switch>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
