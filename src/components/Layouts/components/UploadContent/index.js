import { useEffect, useRef, useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import DescVideo from '../DescVideo';
import Header from '../Header';
import { Wrapper } from '~/Popper';
import Button from '~/components/Button';
import { faCloudArrowUp, faSortDown, faSortUp, faUpDown } from '@fortawesome/free-solid-svg-icons';
import styles from './UploadContent.module.scss';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import HeaderUpload from '../../HeaderOnly/Header/HeaderUpload';

const cx = classNames.bind(styles);
function UploadContent() {
    const [caption, setCaption] = useState('Caption');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showClear, setShowClear] = useState(false);
    const [optionCurrent, setOptionCurrent] = useState('Public');
    const [showOptions, setShowOptions] = useState(false);
    const input = useRef();
    const list = [
        {
            id: 1,
            title: 'Public',
        },
        {
            id: 2,
            title: 'Friends',
        },
        {
            id: 3,
            title: 'Private',
        },
    ];
    const listLangues = [
        {
            id: 1,
            title: 'Tiếng Việt',
        },
        {
            id: 1,
            title: 'English',
        },
        {
            id: 1,
            title: 'Ả Rập',
        },
        {
            id: 1,
            title: 'Thailand',
        },
        {
            id: 1,
            title: 'Singapore',
        },
        {
            id: 1,
            title: 'China',
        },
        {
            id: 1,
            title: 'Korea',
        },
    ];
    const handelShow = () => {
        if (input.current.value === '') {
            setShowSearch(true);
            input.current.value = '             ';
        } else {
            input.current.value = '@';
        }
        setShowClear(true);
        input.current.focus();
        setShowResult(true);
        setCaption('@Friend');
    };
    const handelBlur = () => {
        setShowResult(false);
    };
    const handelClear = () => {
        setShowSearch(false);
        setShowClear(false);
        input.current.value = '@';
        input.current.focus();
        setCaption('Caption');
    };
    const handelActive = (title) => {
        setOptionCurrent(title.target.innerText);
        setShowOptions(false);
    };
    const handelShowOptions = () => {
        if (showOptions) {
            setShowOptions(false);
            return;
        }

        setShowOptions(true);
    };
    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=le&type=more')
            .then((res) => res.json())
            .then((res) => setSearchResult(res.data));
    }, []);
    return (
        <>
            <div className={cx('upload-container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('inner-upload')}>
                        <div>
                            <span className={cx('title-upload')}>Upload video</span>
                            <div>
                                <span className={cx('title-desc')}>Post a video to your account</span>
                            </div>
                        </div>
                        <div className={cx('content-upload')}>
                            <div className={cx('wrapper-file')}>
                                <div className={cx('select-file-parent')}>
                                    <input id="file" type="file" className={cx('input-file')} />
                                    <div className={cx('select-file-children ')}>
                                        <div className={cx('select-file-children__content')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCloudArrowUp} />
                                        </div>
                                        <div className={cx('select-file-children__content', 'title')}>
                                            <span>Select video to upload</span>
                                        </div>
                                        <div className={cx('select-file-children__content', 'action')}>
                                            <span>Or drag and drop a file</span>
                                        </div>
                                        <div>
                                            <div className={cx('select-file-children__content', 'option')}>
                                                <span>Mp4 or WebM</span>
                                            </div>
                                            <div className={cx('select-file-children__content', 'size-video')}>
                                                <span>720x180 resolution or higher</span>
                                            </div>
                                            <div className={cx('select-file-children__content', 'duration')}>
                                                <span>Up to 30 minutes</span>
                                            </div>
                                            <div className={cx('select-file-children__content', 'size-file')}>
                                                <span>Less than 2GB</span>
                                            </div>
                                        </div>
                                        <div className={cx('select-file-children__content')}>
                                            <label for="file" className={cx('btn-chose-file')}>
                                                Select file
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('info-video')}>
                                <div className={cx('edit')}>
                                    <img
                                        className={cx('icon-edit')}
                                        src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/divide_black.e1e40d5b.svg"
                                    />
                                    <div className={cx('wrap')}>
                                        <h3 className={cx('title-edit')}>Divide videos and edit</h3>
                                        <span>
                                            You can quickly divide videos into multiple parts, remove redundant parts
                                            and turn landscape videos into portrait videos
                                        </span>
                                    </div>
                                    <Button primary>Edit</Button>
                                </div>
                                <div className={cx('caption')}>
                                    <h3>{caption}</h3>
                                    <TippyHeadless
                                        interactive
                                        visible={showResult}
                                        placement={'bottom'}
                                        render={(attrs) => (
                                            <div tabIndex="-1" {...attrs}>
                                                <Wrapper className={cx('update')}>
                                                    <div className={cx('wrapper-suggest')}>
                                                        {searchResult.map((item, index) => {
                                                            return <AccountItem key={index} data={item} />;
                                                        })}
                                                    </div>
                                                </Wrapper>
                                            </div>
                                        )}
                                    >
                                        <div className={cx('caption-wrap')}>
                                            <input className={cx('caption-input')} ref={input} onBlur={handelBlur} />
                                            <div className={cx('suggest-parent')}>
                                                {!showClear && (
                                                    <>
                                                        <p className={cx('suggest')} onClick={handelShow}>
                                                            @
                                                        </p>
                                                        <p className={cx('suggest')}>#</p>
                                                    </>
                                                )}
                                                {showClear && (
                                                    <div className={cx('suggest', 'clear')} onClick={handelClear}>
                                                        X
                                                    </div>
                                                )}
                                                {showSearch && (
                                                    <div className={cx('suggest', 'search-icon')}>
                                                        <SearchIcon />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </TippyHeadless>
                                </div>
                                <div className={cx('cover')}>
                                    <h3>Cover</h3>
                                    <input className={cx('input-cover')} />
                                    <div className={cx('inner-input-cover')}></div>
                                </div>
                                <div className={cx('options-video')}>
                                    <h3 className={cx('title-options')}>Who can watch this video</h3>
                                    <TippyHeadless
                                        interactive
                                        placement={'bottom'}
                                        visible={showOptions}
                                        onTrigger={'click'}
                                        render={(attrs) => (
                                            <div tabIndex="-1" {...attrs}>
                                                <Wrapper className={cx('options')}>
                                                    <div className={cx('options-list')}>
                                                        {list.map((title, index) => {
                                                            return (
                                                                <div
                                                                    key={index}
                                                                    onClick={(title) => handelActive(title)}
                                                                >
                                                                    <Button
                                                                        options
                                                                        wrapOption
                                                                        className={cx('a', {
                                                                            [styles.active]:
                                                                                title.title === optionCurrent,
                                                                        })}
                                                                    >
                                                                        <h3 key={index} className={cx('options-item')}>
                                                                            {title.title}
                                                                        </h3>
                                                                    </Button>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </Wrapper>
                                            </div>
                                        )}
                                        onClickOutside={handelShowOptions}
                                    >
                                        <div className={cx('select-option')} onClick={handelShowOptions}>
                                            <h3 className={cx('option-selected')}>{optionCurrent}</h3>
                                            {showOptions ? (
                                                <FontAwesomeIcon className={cx('icon-up')} icon={faSortUp} />
                                            ) : (
                                                <FontAwesomeIcon className={cx('icon-down')} icon={faSortDown} />
                                            )}
                                        </div>
                                    </TippyHeadless>
                                </div>
                                <div className={cx('check')}>
                                    <h3>Who can watch this video</h3>
                                    <div className={cx('input-check')}>
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <h4>Comment</h4>
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <h4>Duet</h4>
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <h4>Stitch</h4>
                                    </div>
                                </div>
                                <div className={cx('desc-video')}>
                                    <DescVideo />
                                </div>
                                <div className={cx('button')}>
                                    <Button large className={cx('btn-discard')}>
                                        Discard
                                    </Button>
                                    <Button large disabled className={cx('btn-discard')}>
                                        Post
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('wrap-item')}>
                        <div className={cx('logo-light')}>
                            <img
                                src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg"
                                title="TikTok"
                                class="jsx-1929089525 logo-icon"
                            />
                            <img
                                src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg"
                                title="TikTok"
                                class="jsx-1929089525 logo-text"
                            />
                        </div>
                        <div>
                            <h4>Company</h4>
                            <h5>About</h5>
                            <h5>Newsroom</h5>
                            <h5>Contact</h5>
                            <h5>Careers</h5>
                            <h5>ByteDance</h5>
                        </div>
                        <div>
                            <h4>Programs</h4>
                            <h5>TikTok for Good</h5>
                            <h5>Advertise</h5>
                            <h5>Developers</h5>
                            <h5>TikTok Rewards</h5>
                            <h5>TikTok Browse</h5>
                            <h5>TikTok Embeds</h5>
                        </div>
                        <div>
                            <h4>Support</h4>
                            <h5>Help Center</h5>
                            <h5>Safety Center</h5>
                            <h5>Creator Portal</h5>
                            <h5>Community Guidelines</h5>
                            <h5>Transparency</h5>
                            <h5>Accessibility</h5>
                        </div>
                        <div>
                            <h4>Legal</h4>
                            <h5>Terms of Use</h5>
                            <h5>Privacy Policy</h5>
                        </div>
                    </div>
                    <div className={cx('footer-langues')}>
                        <div>
                            <TippyHeadless
                                interactive
                                placement={'bottom'}
                                trigger={'click'}
                                render={(attrs) => (
                                    <div tabIndex="-1" {...attrs}>
                                        <Wrapper className={cx('options-footer')}>
                                            <div className={cx('options-list-footer')}>
                                                {listLangues.map((title, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <Button
                                                                options
                                                                wrapOption
                                                                className={cx('a', {
                                                                    [styles.active]: title.title === optionCurrent,
                                                                })}
                                                            >
                                                                <h3 key={index} className={cx('options-item')}>
                                                                    {title.title}
                                                                </h3>
                                                            </Button>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </Wrapper>
                                    </div>
                                )}
                            >
                                <div className={cx('select-option-footer')}>
                                    <h3 className={cx('option-selected-footer')}>English</h3>
                                    <FontAwesomeIcon className={cx('icon-down')} icon={faSortDown} />
                                </div>
                            </TippyHeadless>
                        </div>
                        <p className={cx('hastag')}>@ 2023 Tiktok</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UploadContent;
