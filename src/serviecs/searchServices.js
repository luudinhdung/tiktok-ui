import * as request from '~/ultis/http';

export const search = async (q, type = 'less') => {
    const res = await request.get('users/search', {
        params: {
            q,
            type,
        },
    });
    return res.data;
};
