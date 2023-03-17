import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Wrapper from '../Wrapper';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultFN = () => {};

function Menu({ items, children, hideOnClick = false, onChange = defaultFN }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('menu-popper')}>
                        {history.length - 1 > 0 && (
                            <HeaderMenu
                                title={current.title}
                                onBack={() => {
                                    setHistory((pre) => pre.slice(0, pre.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </Wrapper>
                </div>
            )}
            onHidden={() => {
                setHistory((pre) => pre.slice(0, 1));
            }}
            hideOnClick={hideOnClick}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
