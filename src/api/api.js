import Axios from '.';

// 首页轮播图
export function getBanner() {
    return Axios({
        url: 'fleet/team',
        method: 'get',
    })
}