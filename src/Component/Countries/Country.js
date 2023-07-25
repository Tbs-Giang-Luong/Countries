import styles from './Countries.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Country() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('image')}
                src="https://yt3.ggpht.com/gcqxGrJEc4e15u7BNcqXx2VHFIApCvuP-m5jW3sSEG3U8M-KdRchX6getZsVCO1k74pYTAoj=s48-c-k-c0x00ffffff-no-rj"
                placeholder="img"
            />

            <div className={cx('wrapper-country')}>
                <h2 className={cx('name-country')}>Viet Nam</h2>
                <h3 className={cx('population')}> Population:13,.31241</h3>
                <h3 className={cx('region')}>Region: Asia</h3>
                <h3 className={cx('capital')}>Capital : Ha Noi</h3>
            </div>
        </div>
    );
}

export default Country;