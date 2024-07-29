import Header from '../../components/Header'
import styles from './Location.module.css'

function Location () {
    return(
        <>
            <Header />
            <div className={styles.Location}>
                <h1>Location</h1>
            </div>    
        </>
        );
}

export default Location;
