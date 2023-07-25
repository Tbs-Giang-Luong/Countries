import classNames from 'classnames/bind';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import styles from './SearchAndFilter.module.scss';

const cx = classNames.bind(styles);
function SearchAndFilter() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <Search />
            </div>

            <div className={cx('filter')}>

                <Filter />

            </div>
        </div>
    );
}

export default SearchAndFilter;
