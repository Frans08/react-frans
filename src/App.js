//import { Link, Outlet } from 'react-router-dom';
//import './App.css';
import { Provider } from "react-redux";
import Redux from './components/file';
import store from "./app/Features/store";



function App() {
    return (
        <Provider store={store}>
            <Redux />
        </Provider>
        //<div classname="App">
            //<h1>Web Routing</h1>

           // <nav>
               // <Link to="/home" className='mr'>
                  //  Home
                 ///   </Link>
                //<Link to="/about" className='mr'>
                  //  About
                   // </Link>
                   // <Link to="/category/makanan" className='mr'>
                   // Makanan
                    //</Link>
                    //<Link to="/category/minuman" className='mr'>
                    //Minuman
                    //</Link>
            //</nav>

           // <Outlet />
       // </div>
    );
}

export default App;