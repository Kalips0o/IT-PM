import { Outlet } from 'react-router-dom';
import {
    Layout,
    Space,
} from 'antd';

import SideMenu from '../components/SideMenu/SideMenu.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';

// import styles from './AppLayout.module.css';

const { Header, Sider, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
};
const contentStyle = {
    color: 'black',
};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
};

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
                <Sider style={siderStyle}>
                    <SideMenu />
                </Sider>
                <Layout>
                    <Header style={headerStyle}>
                        <Navbar />
                    </Header>
                    <Content style={contentStyle}>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Space>
    );
}

export default AppLayout;
