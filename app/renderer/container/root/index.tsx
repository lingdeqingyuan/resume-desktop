// 首页模块的入口文件
import React, { useEffect } from 'react';
import './index.less';
import Logo from '@assets/logo.png';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/router';
import { useSelector, useDispatch } from 'react-redux';

function Root() {
  const history = useHistory();
  const dispatch = useDispatch();

  const appName = useSelector((state: any) => state.globalModel.appName);
  console.log('appName=', appName);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'globalModel/setStore',
        payload: {
          key: 'appName',
          values: 'visResumeMook',
        },
      });
    }, 3000);
  }, []);

  useEffect(() => {
    console.log('appName', appName);
  }, [appName]);

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      history.push(router.url);
    }
  };

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">{appName}</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>{router.text}</div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright ©-{new Date().getFullYear()} All Rights Reserved. Copyright By ryuji
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;