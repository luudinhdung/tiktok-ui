import Header from '../../../components/Header';
import classNames from 'classnames/bind';
import styles from './HeaderUpload.module.scss';
const cx = classNames.bind(styles);
function HeaderUpload() {
    return (
        <div className={cx('wrapper')}>
            <Header widthNew={true} />
        </div>
    );
}

export default HeaderUpload;
