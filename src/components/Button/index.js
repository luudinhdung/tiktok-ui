import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    wrapOption,
    className,
    leftIcon,
    rightIcon,
    follow,
    onClick,
    options,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        options,
        outline,
        wrapOption,
        text,
        disabled,
        rounded,
        follow,
        options,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.string,
    large: PropTypes.string,
    children: PropTypes.node.isRequired,
    wrapOption: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    onClick: PropTypes.func,
    follow: PropTypes.string,
    options: PropTypes.string,
};

export default Button;
