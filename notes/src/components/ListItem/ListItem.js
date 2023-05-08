import Item from "../Item/Item";
import styles from "./Listitem.module.scss";

const ListItem = () => {
    return(
        <>
            <div className={styles.listitem}>
           <Item/>
           </div>
        </>
    )
}

export default ListItem;