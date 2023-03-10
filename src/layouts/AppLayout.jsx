import { Layout, Space } from 'antd';
import { Outlet } from 'react-router-dom';
import SideMenu from '../components/SideMenu/SideMenu.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';

import styles from './AppLayout.module.scss';
import appSider from './AppLayout.style';

const { Header, Content, Sider } = Layout;

function AppLayout() {
    return (
        <Space
            direction="vertical"
            style={{
                width: '100%',
            }}
            size={[0, 48]}
        >
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
        </Space>
    );
}

export default AppLayout;
