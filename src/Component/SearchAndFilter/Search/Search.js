import className from 'classnames/bind';
import styles from './Search.module.scss'
import { FiSearch } from 'react-icons/fi';

const cx = className.bind(styles);

function Search() {
	return (
		<div className={cx('wrapper')}>
			<h2 className={cx('search-title')}>Search Country</h2>
			<div className={cx('wrapper-input')}>
				<input className={cx('search-input')} placeholder='Input the and enter to search ...' />
				<span className={cx('icon')}>
					{' '}
					<FiSearch />
				</span>
			</div>
		</div>
	);
}

export default Search;
