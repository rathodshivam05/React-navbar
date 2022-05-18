import {Navbar} from './components/Navbar';
import{ Links}  from './components/Links';
import { Button } from './components/Button';
import styles from './navbar.module.css';
function App() {
  return (
    <div className={styles.navbar}>
    <Navbar/>
    <Links />
    <Button/>
    </div>
  
  );
}

export default App;
