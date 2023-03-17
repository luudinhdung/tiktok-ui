import classNames from 'classnames/bind';
import styles from './AccountSuggest.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function AccountSuggest({ label }) {
    const [seeall, setSeeall] = useState('See all');
    const [suggest, setSuggest] = useState([]);
    const [type, setType] = useState('less');
    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=a&type=${type}`)
            .then((res) => res.json())
            .then((res) => setSuggest(res.data));
    }, [type]);
    const handelSeeAll = () => {
        setType('more');

        const typeCurrent = type;
        if (typeCurrent === 'more') {
            setType('less');
        }
        if (seeall === 'See all') {
            setTimeout(() => {
                setSeeall('See less');
            }, 100);
        } else {
            setTimeout(() => {
                setSeeall('See all');
            }, 100);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {suggest.map((item, index) => {
                return <AccountItem data={item} key={index} />;
            })}
            <p className={cx('more')} onClick={handelSeeAll}>
                {seeall}
            </p>
        </div>
    );
}

export default AccountSuggest;
