import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SideMenu from '../components/SideMenu/SideMenu.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';

import styles from './AppLayout.module.scss';
import appSider from './AppLayout.style';

const { Header, Content, Sider } = Layout;

function AppLayout() {
    return (
        <Layout className={styles.layout}>
            <Sider width={292} style={appSider}>
                <SideMenu />
            </Sider>
            <Layout>
                <Header className={styles.appHeader}>
                    <Navbar />
                </Header>
                <Content className={styles.appContent}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default AppLayout;
