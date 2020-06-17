import React from 'react';
import styles from './index.less';
import { Link, history, NavLink } from 'umi';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index111111111</h1>
      <Link to="/first">Page first</Link>
      <Link to="/second">Page second</Link>
      <Link to="/third">Page third</Link>
      <Link to="/forth">Page forth</Link>
      <Link to="/fifth">Page fifth</Link>
    </div>
  );
}
