import config from '~/config';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layouts';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.live,
        component: Live,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
