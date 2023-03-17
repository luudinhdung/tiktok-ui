import styles from './Discover.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Discover() {
    const listDiscover = [
        {
            icon: '#',
            title: 'suthala',
        },
        {
            icon: '#',
            title: 'sansangthaydoi',
        },
        {
            icon: '#',
            title: 'see tình',
        },
        {
            icon: <FontAwesomeIcon icon={faMusic} />,
            title: 'Yêu Đơn Phương Là Gì remix',
        },
        {
            icon: <FontAwesomeIcon icon={faMusic} />,
            title: 'Về Nghe Mẹ Ru',
        },
        {
            icon: <FontAwesomeIcon icon={faMusic} />,
            title: 'Thiên Thần Tình Yêu',
        },
        {
            icon: <FontAwesomeIcon icon={faMusic} />,
            title: 'Hạnh Phúc Đổi Lấy Cô Đơn',
        },
        {
            icon: '#',
            title: '7749hieuung',
        },
        {
            icon: <FontAwesomeIcon icon={faMusic} />,
            title: 'Tình Đã Đầy 1 Tim',
        },
        {
            icon: <FontAwesomeIcon icon={faMusic} />,
            title: 'Thằng Hầu Remix',
        },
    ];
    return (
        <div>
            <div>
                {' '}
                <label>Discover</label>
            </div>
            <div>
                {listDiscover.map((item, index) => {
                    return (
                        <Button className={cx('btn-hastag')} leftIcon={item.icon} small rounded>
                            <p className={cx('title')}>{item.title}</p>
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

export default Discover;
