import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './InboxDark.module.scss';
import { Wrapper as PopperWrapper } from '~/Popper';
import TippyHeadless from '@tippyjs/react/headless';
import Button from '../Button';
import AccountItem from '../AccountItem';

const cx = classNames.bind(styles);

function InBoxDark({ onClick }) {
    const [memberBox, setMemberBox] = useState([]);
    const [active, setActive] = useState(0);
    const [status, setStatus] = useState(() => {
        return 'Follow';
    });
    const wrapActive = useRef();
    const wrapAcount = useRef();
    const checkActive = wrapActive.current;
    const checkAccount = wrapAcount.current;
    const activeList = [
        {
            title: 'All active',
            id: 0,
        },
        {
            title: 'Likes',
            id: 1,
        },
        {
            title: 'Comments',
            id: 2,
        },
        {
            title: 'Mentions and tags',
            id: 3,
        },
        {
            title: 'Followers',
            id: 4,
        },
    ];
    const handel = (index) => {
        if (checkAccount) {
            checkAccount.childNodes.forEach((element, id) => {
                console.log(element.className(`acount${id}`));
            });
        }
    };

    if (checkActive) {
        checkActive.childNodes.forEach((element, index) => {
            element.onclick = () => {
                return setActive(index);
            };
        });
    }

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=a&type=more')
            .then((res) => res.json())
            .then((res) => setMemberBox(res.data));
    }, []);
    return (
        <TippyHeadless
            interactive
            visible={true}
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('darkBox')}>
                        <div className={cx('wrapInbox')}>
                            <div className={cx('wrapHeader')}>
                                <h2>Notifications</h2>
                                <div ref={wrapActive} className={cx('active')}>
                                    {activeList.map((title, index) => {
                                        return (
                                            <div className={cx('btn')}>
                                                <Button
                                                    rounded
                                                    small
                                                    className={cx({
                                                        [styles.activeBtn]: index === active,
                                                    })}
                                                >
                                                    <div key={index}>
                                                        <p>{title.title}</p>
                                                    </div>
                                                </Button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <p className={cx('previous')}>Previous</p>
                            <div ref={wrapAcount} className={cx('wrap-member')}>
                                {memberBox.map((member, index) => {
                                    return (
                                        <div className={cx('account-follow')}>
                                            <div className={cx('info-acount')}>
                                                {' '}
                                                <AccountItem data={member} className={cx('custom')} />
                                                <div
                                                    className={cx(`acount${index}`)}
                                                    onClick={() => {
                                                        handel(index);
                                                    }}
                                                >
                                                    <Button primary follow className={cx('btn-follow')}>
                                                        {status}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={onClick}
        >
            <svg
                onClick={onClick}
                class="tiktok-19qintf-StyledInboxIconActive e18kkhh42"
                width="32"
                data-e2e=""
                height="32"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.4977 9C10.1195 9 9.0013 10.1153 8.99767 11.4934L8.94239 32.4934C8.93875 33.8767 10.0591 35 11.4424 35H18.7895L22.0656 39.004C23.0659 40.2265 24.9352 40.2264 25.9354 39.0039L29.2111 35H36.5587C37.942 35 39.0623 33.8767 39.0587 32.4934L39.0029 11.4934C38.9993 10.1152 37.8811 9 36.5029 9H11.4977ZM29 21H19C18.4477 21 18 21.4477 18 22V23C18 23.5523 18.4477 24 19 24H29C29.5523 24 30 23.5523 30 23V22C30 21.4477 29.5523 21 29 21Z"
                ></path>
            </svg>
        </TippyHeadless>
    );
}

export default InBoxDark;
