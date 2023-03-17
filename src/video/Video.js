import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import { useRef, useState, useEffect } from 'react';
import { useElementOnScreen } from '~/components/ContentHome/ContentHome';
const cx = classNames.bind(styles);
function Video({ src }) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const handleVideo = () => {
        if (playing) {
            console.log(1);
            videoRef.current.pause();
            setPlaying(false);
        } else {
            console.log(2);

            videoRef.current.play();
            setPlaying(true);
        }
    };
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };
    const isVisibile = useElementOnScreen(options, videoRef);

    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisibile]);

    return (
        <div className={cx('wrap')}>
            <video tabIndex="1" ref={videoRef} className={cx('video')} src={src} onClick={handleVideo}></video>
        </div>
    );
}

export default Video;
