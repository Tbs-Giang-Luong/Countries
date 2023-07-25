import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import styles from './App.scss';
import Countries from './Component/Countries/Countries';
import GlobalStyles from './Component/GlobalStyles/GlobalStyles';
import Header from './Component/Header/Header';
import SearchAndFilter from './Component/SearchAndFilter/SearchAndFilter';
import ThemeProvider from './Component/ThemeContext/ThemeProvider';
const cx = classNames.bind(styles);

function App() {
	return (
		<ThemeProvider>
			<GlobalStyles>
				<div className={cx('app')}>
					<Header />
					<div className={cx('div-container')}>
						<SearchAndFilter />
						<Countries />
						<Outlet />
					</div>
				</div>
			</GlobalStyles>
		</ThemeProvider>
	);
}

export default App;
