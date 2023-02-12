import { Link, Outlet } from 'umi';
import LeftMenu from './common/Layouts.js'
import styles from './index.less';

export default function Layout(props) {
  console.log('props',props);
  
  return (
    <div className={styles.navs}>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <Link to="/home">home</Link>
        </li>
      </ul> */}
      <LeftMenu/>
      <Outlet /> 
    </div>
  );
}
