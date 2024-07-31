import styles from './product.module.css'

function Product ( {img, description} ){
    return(
        <div className={styles.product}>
            <div className={styles.img}>
                <img src={`/img/${img}`}  alt={description}/>
            </div>
        </div>
    );
}

export default Product;
