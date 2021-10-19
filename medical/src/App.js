import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter,Route, Switch,NavLink } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Topbar from './Components/Topbar/Topbar';
import SingleService from './Components/SingleService/SingleService';
import ServiceDiscription from './Components/ServiceDiscription/ServiceDiscription';
import Footer from './Components/Footer/Footer';
import Login from './Components/LoginSystem/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/LoginSystem/PrivateRoute/PrivateRoute';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div>
        <AuthProvider>
            <BrowserRouter>
                <Topbar> </Topbar>
                <Header></Header>
                    <Switch>

                        <Route exact path="/">
                            <Home></Home>
                        </Route>

                        <Route exact path="/home">
                            <Home></Home>
                        </Route>

                        <Route exact path="/about">
                            <About></About>
                        </Route>

                        <Route exact path="/singleservice">
                            <SingleService></SingleService>
                        </Route>

                        <Route exact path="/login">
                            <Login></Login>
                        </Route>

                        <PrivateRoute exact path="/blog"> 
                            <Blog></Blog>
                        </PrivateRoute>

                        <Route exact path="/singleservice/:servicediscription">
                            <ServiceDiscription></ServiceDiscription>
                        </Route>

                        <Route exact path="*">
                            <NotFound></NotFound>
                        </Route>

                    </Switch>
                    <Footer></Footer>
            </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
