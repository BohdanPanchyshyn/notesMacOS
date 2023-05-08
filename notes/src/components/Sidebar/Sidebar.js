
import ListItem from "../ListItem/ListItem";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return(
        <>
            <aside className={styles.sidebar}>
              <ListItem/>
           </aside>
        </>
    )
}

export default Sidebar;