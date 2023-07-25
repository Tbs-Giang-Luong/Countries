import classNames from 'classnames/bind';
import styles from './Filter.module.scss';

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegionsList } from '../../data/data';
import { useDispatch } from 'react-redux';
import getAllCountries from '../../redux/action';
const cx = classNames.bind(styles);

function FilterItem({ showOption }) {
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const listRef = useRef();

    useEffect(() => {
        const handleList = () => {
            if (showOption) {
                listRef.current.style.height = `${listRef.current.style.height}px`;
                listRef.current.style.transform = 'scaleY(1)';
            } else {
                listRef.current.style.height = 0;
                listRef.current.style.transform = 'scaleY(0)';
            }
        };

        handleList();

        document.addEventListener('resize', handleList);

        return () => {
            document.addEventListener('resize', handleList);
        };
    }, [showOption]);


    const handleValueOptions = (region) => {
        if (region !== 'All') {
            navigate(`regions/${region}`);
        } else if (region === 'All') {
            navigate('/');
        }
    };

    useEffect(() => {
        dispatch(getAllCountries())
    }, [])


    return (
        <div className={cx('wrapper-list-legion')} ref={listRef}>
            <ul className={cx('list-regions')}>
                {RegionsList &&
                    RegionsList.map((item, index) => {
                        const iconRegions = item.icon();

                        return (
                            <li
                                key={index}
                                className={cx('item-region')}
                                onClick={() => handleValueOptions(item.title)}
                            >
                                <h3 className={cx('title-item')}>{item.title.toUpperCase()}</h3>
                                <span className={cx('icon-item')}>{iconRegions}</span>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

export default FilterItem;
