import Searchbox from "../SearchBox/Searchbox";
import Tools from "../Tools/Tools";
import styles from "./Header.module.scss";

const Header = () => {
    return(
        <>
            <header className={styles.header}>
                <Tools/>
               <Searchbox/>
           </header>
        </>
    )
}

export default Header;