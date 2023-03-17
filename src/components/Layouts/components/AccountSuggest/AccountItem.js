import styles from './AccountSuggest.module.scss';
import classNames from 'classnames/bind';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { Wrapper } from '~/Popper';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <TippyHeadless
            appendTo={document.body}
            interactive
            delay={[800, 0]}
            placement="bottom"
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('wrap-desc')}>
                        <div className={cx('parent-desc')}>
                            <div className={cx('header-desc')}>
                                <img className={cx('avatar-desc')} src={data.avatar} />
                                <Button primary className={cx('btn-desc')}>
                                    Follow
                                </Button>
                            </div>
                            <div className={cx('info-desc')}>
                                <strong className={cx('nick-name')}>{data.nickname}</strong>
                                <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                                <div>
                                    {' '}
                                    <span className={cx('full-name-desc')}>{data.fullName}</span>
                                </div>

                                <div className={cx('analytics')}>
                                    <strong className={cx('value')}>{data.followers_count}M</strong>
                                    <span className={cx('desc')}>{data.likes_count}Followers</span>
                                    <strong className={cx('value')}>{data.likes_count}M</strong>
                                    <span className={cx('desc')}>Likes</span>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            )}
        >
            <div className={cx('account-item')}>
                <img className={cx('avatar')} src={data.avatar} alt="" />
                <div className={cx('info')}>
                    <strong className={cx('nick-name')}>{data.nickname}</strong>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                    <p className={cx('full-name')}>{data.fullName}</p>
                </div>
            </div>
        </TippyHeadless>
    );
}

export default AccountItem;
