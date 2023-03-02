import { Layout, Space } from 'antd';
import SideMenu from './components/SideMenu/SideMenu.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

const { Header, Sider, Content } = Layout;

const headerStyle = {
    textAlign: 'absolute',
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '20px',
    marginBottom: '20px',
    color: '#fff',
    height: '100px',
    paddingInline: 50,
    lineHeight: '100px',
    backgroundColor: '#7dbcea',
};

const contentStyle = {
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '20px',
    marginBottom: '20px',
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};

const siderStyle = {
    marginTop: '20px',
    marginLeft: '20px',
    marginBottom: '20px',
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};

function AppAnt() {
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
                        content
                    </Content>
                </Layout>
            </Layout>
        </Space>
    );
}

export default AppAnt;

/*
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
                    <Content style={contentStyle} />
                </Layout>
            </Layout>
        </Space>
*/
