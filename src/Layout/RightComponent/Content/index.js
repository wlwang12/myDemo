import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { layout } from 'antd';
import menus from 'src/Layout/LeftComponent/menu';
const { Content } = layout;


// 个人画像
const GeRenHuaXiang = React.lazy(() => import ('./GeRenHuaXiang'));

// 行为轨迹
const XingWeiGuiJi = React.lazy(() => import('./XingWeiGuiJi/GeRenGuiJi'));

// 综合预警
// 预警列表
const YuJingLieBiao = React.lazy(() => import('./ZongHeYuJing/YuJingLieBiao'));
// 预警白名单配置
const BaiMingDanPeiZhi = React.lazy(() => import('./ZongHeYuJing/BaiMingDanPeiZhi'));
// 预警设置
const YuJingSheZhi = React.lazy(() => import('./ZongHeYuJing/YuJingSheZhi'));

// 精准资助
// 家庭经济困难学生分析
const KunNanXueShengFenXi = React.lazy(() => import('./JingZhunZiZhu/KunNanXueShengFenXi'));
// 家庭经济困难学生查询
const KunNanXueShengChaXun = React.lazy(() => import('./JingZhunZiZhu/KunNanXueShengChaXun'));
// 异常家庭经济困难学生
const YiChangKunNanXueSheng = React.lazy(() => import('./JingZhunZiZhu/YiChangKunNanXueSheng'));
// 建议关爱学生查询
const JianYiGuanAiXueSheng = React.lazy(() => import('./JingZhunZiZhu/JianYiGuanAiXueSheng'));

// 权限管理
// 账户管理
const ZhangHuGuanLi = React.lazy(() => import('./QuanXianGuanLi/ZhangHuGuanLi'));
// 角色管理
const JueSeGuanLi = React.lazy(() => import('./QuanXianGuanLi/JueSeGuanLi'));


export default class Index extends React.Component {
    render() {
        return (
            <Content>
                <React.Suspense fallback={null}>
                    <Switch>
                        {/* 个人画像 */}
                        <Route exact path="/main/gerenhuaxiang" component={GeRenHuaXiang} />

                        {/* 行为轨迹 */}
                        <Route exact path="/main/xingweiguiji/gerenguiji" component={XingWeiGuiJi} />

                        {/* 综合预警 */}
                        {/* 预警列表 */}
                        <Route exact path="/main/zongheyujing/yujingliebiao" component={YuJingLieBiao} />
                        {/* 预警白名单配置 */}
                        <Route exact path="/main/zongheyujing/yujingbaimingdanpeizhi" component={BaiMingDanPeiZhi} />
                        {/* 预警设置 */}
                        <Route exact path="/main/zongheyujing/yujingshezhi" component={YuJingSheZhi} />

                        {/* 精准资助 */}
                        {/* 家庭经济困难学生分析 */}
                        <Route exact path="/main/jingzhunzizhu/kunnanxueshengfenxi" component={KunNanXueShengFenXi} />
                        {/* 家庭经济困难学生查询 */}
                        <Route exact path="/main/jingzhunzizhu/kunnanxueshengchaxun" component={KunNanXueShengChaXun} />
                        {/* 异常家庭经济困难学生 */}
                        <Route exact path="/main/jingzhunzizhu/yichangkunnanxuesheng" component={YiChangKunNanXueSheng} />
                        {/* 建议关爱学生查询 */}
                        <Route exact path="/main/jingzhunzizhu/jianyiguanaixuesheng" component={JianYiGuanAiXueSheng} />

                        {/* 权限管理 */}
                        {/* 账户管理 */}
                        <Route exact path="/main/quanxianguanli/zhuanghuguanli" component={ZhangHuGuanLi} />
                        {/* 角色管理 */}
                        <Route exact path="/main/quanxianguanli/jueseguanli" component={JueSeGuanLi} />


                        <Route path="*" render={(props) => <Redirect to={(menus[0].subMenus && menus[0].subMenus[0]) ? menus[0].subMenus[0].url : menus[0].url}/>} />
                    </Switch>
                </React.Suspense>
            </Content>
        );
    }
}