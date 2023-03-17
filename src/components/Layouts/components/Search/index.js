import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/Popper';
import TippyHeadless from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import * as searchServices from '~/serviecs/searchServices';
import useDebounce from '~/hooks/useDebounce';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSerachValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const debounce = useDebounce(searchValue, 1000);
    const input = useRef();
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setShowLoading(true);
        const fetchApi = async () => {
            const result = await searchServices.search(debounce);
            setShowLoading(false);
            setSearchResult(result);
        };
        fetchApi();
    }, [debounce]);
    const handelDelete = () => {
        setSerachValue('');
        setSearchResult([]);
        input.current.focus();
    };
    const handelHideResult = () => {
        setShowResult(false);
    };
    const handelChange = (e) => {
        const valueSearch = e.target.value;
        if (valueSearch.startsWith(' ')) {
            return;
        }
        setSerachValue(valueSearch);
    };
    const handelShowResult = () => {
        setShowResult(true);
    };
    return (
        <TippyHeadless
            appendTo={document.body}
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('wrapValues')}>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((item, index) => {
                            return <AccountItem key={index} data={item} className={cx('acuont-search')} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handelHideResult}
        >
            <div className={cx('input-search')}>
                <input
                    ref={input}
                    value={searchValue}
                    spellCheck={false}
                    placeholder="Search account and videos "
                    onChange={handelChange}
                    onFocus={handelShowResult}
                />
                {searchValue.length > 0 && (
                    <button className={cx('close')}>
                        <FontAwesomeIcon icon={faCircleXmark} onClick={handelDelete} />
                    </button>
                )}
                {showLoading && (
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
