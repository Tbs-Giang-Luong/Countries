import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import styles from './Filter.module.scss';

import FilterItem from './FilterItem';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
function Filter() {
    let { regionName } = useParams();
    // console.log(regionName)
    const [region, setRegion] = useState('All');

    const [showOption, setShowOption] = useState(false);
    const optionsRef = useRef();

    const handleChangeOptions = (e) => {
        if (optionsRef.current) setShowOption(optionsRef.current.contains(e.target));
    };

    useEffect(() => {
        if (optionsRef.current) {
            document.addEventListener('click', handleChangeOptions);
        }

        return () => {
            document.removeEventListener('click', handleChangeOptions);
        };
    }, [showOption]);



    useEffect(() => {
        if (regionName !== "All") {
            setRegion(regionName)
        } else {
            setRegion("All")
        }

    }, [regionName])

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title-filter')}>Filter by Regions:</h2>
            <div className={cx('options-filter')} ref={optionsRef} onClick={(e) => handleChangeOptions(e)}>
                <h3 className={cx('all')}>{region || "All"}</h3>
                <span className={cx('arrow-down')}>
                    <FiArrowDownCircle />
                </span>
            </div>

            <FilterItem showOption={showOption} />
        </div>
    );
}

export default Filter;
