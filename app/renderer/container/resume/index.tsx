import React from 'react';
import './index.less';
import fileAction from '@src/common/utils/file';
import { getAppPath } from '@src/common/utils/appPath';

function Resume() {
  getAppPath().then((rootPath: string) => {
    fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
      console.log(data);
    });
  });
  return <div>我是简历模块</div>;
}
export default Resume;