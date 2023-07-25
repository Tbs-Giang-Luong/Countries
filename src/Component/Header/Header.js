import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from "react-router-dom";
import { BiSun, BiMoon } from 'react-icons/bi';
import { useEffect, useRef, useState, useContext } from 'react';
import { Theme } from '../ThemeContext/ThemeProvider';

const cx = classNames.bind(styles);
function Header() {
    const theme = useContext(Theme)
    const [isDark, setIsDark] = useState(false);
    const toggleRef = useRef();
    const iconRef = useRef();
    const circleRef = useRef();
    const inputRef = useRef();
    // const dark = theme.theme
    // console.log(dark)

    const handleToggle = () => {
        inputRef.current.checked = !inputRef.current.checked;
        // setIsDark(!inputRef.current.checked)
        setIsDark(!isDark);
        theme.changeTheme()
    };

    // useEffect(() => {
    //     // inputRef.current.checked = isDark;
    // }, [isDark]);

    useEffect(() => {
        const handleChange = () => {
            if (isDark) {
                toggleRef.current.style.background = '#666';
                circleRef.current.style.background = '#fff';
                iconRef.current.style.color = '#333';
            } else {
                toggleRef.current.style.background = '#00a6ed';
                circleRef.current.style.background = '#000';
                iconRef.current.style.color = 'yellow';
            }
        };

        handleChange();
        document.addEventListener('resize', handleChange);

        return () => {
            document.removeEventListener('resize', handleChange);
        };
    }, [isDark]);

    const classes = cx("wrapper", theme.theme)
    return (

        <div className={classes} >
            <Link to="/" className={cx('logo')}> Where in the world </Link>

            <div className={cx('toggle-button')} ref={toggleRef} onClick={() => handleToggle()}>
                <input className={cx('inputCheck')} type="checkbox" ref={inputRef} />
                <div className={cx('icon')} ref={iconRef}>
                    {isDark ? <BiMoon /> : <BiSun />}
                </div>
                <div className={cx('circle')} ref={circleRef}></div>
            </div>
        </div>
    );
}

// , dark ? "dark" : "light"
export default Header;
