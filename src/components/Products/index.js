import Header from '../../components/Header';
import styles from './products.module.css'

function Products () {
    return(
        <>
            <Header />
            <div className={styles.products}>
                <h1>Confira Nossos Produtos</h1>

                <div className={styles.product}>

                </div>
            </div>
        </>    
        );
}

export default Products;
