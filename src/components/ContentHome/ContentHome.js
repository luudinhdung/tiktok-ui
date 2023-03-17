import styles from './ContentHome.module.scss';
import classNames from 'classnames/bind';
import Video from '~/video/Video';
import { useEffect, useMemo, useState } from 'react';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function ContentHome() {
    return (
        <div className={cx('body-home')}>
            <div className={cx('wrapper')}>
                <Image
                    className={cx('avatar')}
                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                />
                <div className={cx('info-video')}>
                    <p className={cx('name-chanel')}>F8_Office</p>
                    <p className={cx('content-video')}>
                        <span className={cx('creater-content')}>@Sondn</span> Đi làm có cần bằng đại học ?
                    </p>
                    <p className={cx('orginal-music')}>
                        <FontAwesomeIcon icon={faMusic} /> Xomu
                    </p>

                    <Video src="https://www.w3schools.com/html/movie.mp4" />
                </div>
            </div>

            <div className={cx('wrapper')}>
                <Image
                    className={cx('avatar')}
                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                />
                <div className={cx('info-video')}>
                    <p className={cx('name-chanel')}>F8_Office</p>
                    <p className={cx('content-video')}>
                        <span className={cx('creater-content')}>@Sondn</span> Đi làm có cần bằng đại học ?
                    </p>
                    <p className={cx('orginal-music')}>
                        <FontAwesomeIcon icon={faMusic} /> Xomu
                    </p>

                    <Video src="https://www.w3schools.com/html/movie.mp4" />
                </div>
            </div>
            <div className={cx('wrapper')}>
                <Image
                    className={cx('avatar')}
                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                />
                <div className={cx('info-video')}>
                    <p className={cx('name-chanel')}>F8_Office</p>
                    <p className={cx('content-video')}>
                        <span className={cx('creater-content')}>@Sondn</span> Đi làm có cần bằng đại học ?
                    </p>
                    <p className={cx('orginal-music')}>
                        <FontAwesomeIcon icon={faMusic} /> Xomu
                    </p>

                    <Video src="https://www.w3schools.com/html/movie.mp4" />
                </div>
            </div>
            <div className={cx('wrapper')}>
                <Image
                    className={cx('avatar')}
                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                />
                <div className={cx('info-video')}>
                    <p className={cx('name-chanel')}>F8_Office</p>
                    <p className={cx('content-video')}>
                        <span className={cx('creater-content')}>@Sondn</span> Đi làm có cần bằng đại học ?
                    </p>
                    <p className={cx('orginal-music')}>
                        <FontAwesomeIcon icon={faMusic} /> Xomu
                    </p>

                    <Video src="https://www.w3schools.com/html/movie.mp4" />
                </div>
            </div>
            <div className={cx('wrapper')}>
                <Image
                    className={cx('avatar')}
                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                />
                <div className={cx('info-video')}>
                    <p className={cx('name-chanel')}>F8_Office</p>
                    <p className={cx('content-video')}>
                        <span className={cx('creater-content')}>@Sondn</span> Đi làm có cần bằng đại học ?
                    </p>
                    <p className={cx('orginal-music')}>
                        <FontAwesomeIcon icon={faMusic} /> Xomu
                    </p>

                    <Video src="https://www.w3schools.com/html/movie.mp4" />
                </div>
            </div>
            <div className={cx('wrapper')}>
                <Image
                    className={cx('avatar')}
                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                />
                <div className={cx('info-video')}>
                    <p className={cx('name-chanel')}>F8_Office</p>
                    <p className={cx('content-video')}>
                        <span className={cx('creater-content')}>@Sondn</span> Đi làm có cần bằng đại học ?
                    </p>
                    <p className={cx('orginal-music')}>
                        <FontAwesomeIcon icon={faMusic} /> Xomu
                    </p>

                    <Video src="https://www.w3schools.com/html/movie.mp4" />
                </div>
            </div>
        </div>
    );
}

export const useElementOnScreen = (options, targetRef) => {
    const [isVisibile, setIsVisible] = useState();
    const callbackFunction = (entries) => {
        const [entry] = entries; //const entry = entries[0]
        setIsVisible(entry.isIntersecting);
    };
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [targetRef, optionsMemo]);
    return isVisibile;
};

export default ContentHome;
