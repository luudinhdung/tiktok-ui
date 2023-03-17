import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
import images from '~/assets/images';
function Image({ src, className, alt, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handelFallback = () => {
        setFallback(images.noImage);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            ref={ref}
            alt={alt}
            onError={handelFallback}
            {...props}
        />
    );
}

export default forwardRef(Image);
