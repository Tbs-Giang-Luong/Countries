import styles from './Countries.module.scss';
import classNames from 'classnames/bind';
import Country from './Country';
const cx = classNames.bind(styles);

function Countries() {
    return (
        <div className={cx('main-wrapper')}>
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
        </div>
    );
}

export default Countries;
