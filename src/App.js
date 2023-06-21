import './App.css';
import { Header } from "./components/Header/Header"
import User from "./components/User/User"
import { Home } from './pages/Home/Home';


function App() {
  const user = new User()

  const obUser = {
    id: 1,
    name: 'Valdir',
    email: 'valdirpiresba@gmail.com'
  }

  return (
    <div className="container-full ">
      <Header />

        <div className='flex flex-row flex-wrap mt-40 mx-20'>
            <Home />
        </div>
    </div>
  );
}

export default App;
