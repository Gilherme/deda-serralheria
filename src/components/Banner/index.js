import styles from './banner.module.css'

function Banner () {
    return(
        <div className={styles.banner}>
            <img src='/img/banner.jpg' alt='Banner/ capa'></img>
            <div className={styles.aboutBanner}>
                <p>
                    Serralheria com mais de 7 anos de experiência, 
                    entregando qualidade e respeitando prazos. Soluções personalizadas,
                    mão de obra qualificada e compromisso com a satisfação do cliente.
                </p>
            </div>
        </div>    
        );
}

export default Banner;
