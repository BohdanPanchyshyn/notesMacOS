import styles from "./Tools.module.scss";

const Tools = () => {
    return(
        <>
            <div className={styles.tools}>
                <button>Add</button>
                <button>Del</button>
                <button>Edit</button>
            </div>
        </>
    )
}

export default Tools;