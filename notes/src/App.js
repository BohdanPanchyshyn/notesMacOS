import styles from './App.module.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Workspace from './components/Workspace/Workspace';


function App() {
  return (
    <div className={styles.App}>
     <Header/>
        <div className={styles.content}>
          <Sidebar/>
          <Workspace/>
        </div>
    </div>
  );
}

export default App;
