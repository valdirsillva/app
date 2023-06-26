import './App.css';
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
        <Home />
    </div>
  );
}

export default App;
