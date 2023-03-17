import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem({ data, className }) {
    const classes = cx({
        [className]: className,
    });
    return (
        <Link to={`/@${data.nickname}}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info', classes)}>
                <div className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </div>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.prototype = {
    data: PropTypes.object,
};

export default AccountItem;
