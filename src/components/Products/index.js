import Header from '../../components/Header';
import styles from './products.module.css'

function Products ( { children } ) {
    return(
        <>
            <Header />
            <div className={styles.products}>
                <h1>Confira Nossos Produtos</h1>

                <div className={styles.product}>
                    { children }
                </div>
            </div>
        </>    
        );
}

export default Products;
