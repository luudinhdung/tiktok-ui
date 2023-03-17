import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import AccountSuggest from '../AccountSuggest';
import Discover from './Discover/Discover';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('a')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        title="Live"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>
                <AccountSuggest label="Suggested accounts" />
                <AccountSuggest label="Following accounts" />
                <Discover />
            </div>
        </div>
    );
}

export default Sidebar;
