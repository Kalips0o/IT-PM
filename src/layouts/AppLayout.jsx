import {Outlet} from 'react-router-dom';
import {Layout, Space} from 'antd';
import SideMenu from '../components/SideMenu/SideMenu.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';

import styles from './AppLayout.module.css';

const {Header, Sider, Content} = Layout;

function AppLayout() {
    return (
        <Space
            direction="vertical"
            style={{
                width: '100%',
            }}
            size={[0, 48]}
        >
            <Layout>
                <Sider className={styles.appSider}>
                    <SideMenu/>
                </Sider>
                <Layout>
                    <Header className={styles.appHeader}>
                        <Navbar/>
                    </Header>
                    <Content className={styles.appContent}>
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </Space>
    );
}

export default AppLayout;
