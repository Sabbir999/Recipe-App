import styles from "./Body.module.css"

function Body(){
    return <>
        <main>
            <form className={styles.addIngredientForm}>
                <input
                    type="text"
                    placeholder="e.g oregano"
                    aria-label="Add ingredinent"

                />
                <button className={styles.button}>Add ingredinent</button>
            </form>
        </main>
    </>
}
export default Body;