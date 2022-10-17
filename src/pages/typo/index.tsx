import React from 'react';
import styles from '@styles/typobook/typo.test.module.css';
const TypePage = () => {
    return (
        <div>
            <p className={styles.Dmsans700}>Dmsans700 30Px</p>
            <p style={{ fontSize: '20px' }} className={styles.Dmsans500}>
                Dmsans500 30Px
            </p>
            <p style={{ fontSize: '20px' }} className={styles.Dmsans400}>
                Dmsans400 30Px
            </p>
            <p style={{ fontSize: '20px' }} className={styles.Poppins700}>
                Poppins700 30Px
            </p>
            <p style={{ fontSize: '20px' }} className={styles.Poppins400}>
                Poppins-400 30Px
            </p>
            <p style={{ fontSize: '20px' }} className={styles.Wemakeprice700}>
                Wemakeprice-700 30Px
            </p>
            <p style={{ fontSize: '20px' }} className={styles.Wemakeprice700}>
                Wemakeprice-700 30Px
            </p>
            <p style={{ fontSize: '20px' }} className={styles.Wemakeprice600}>
                Wemakeprice-600 30Px
            </p>
            <p style={{ fontSize: '20px' }} className={styles.GmarketSans500}>
                GmarketSans-500 30Px
            </p>
            <p style={{ fontSize: '20px' }} className={styles.GmarketSans300}>
                GmarketSans-300 30Px
            </p>
        </div>
    );
};

export default TypePage;
