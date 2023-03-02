import {Layout, Space} from 'antd';
import Navbar from "./Component/Navbar/Navbar";
import OurHeader from "./Component/Header/Header";

const {Header,  Sider, Content} = Layout;
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
// const footerStyle = {
//     textAlign: 'center',
//     color: '#fff',
//     backgroundColor: '#7dbcea',
// };
const AppAnt = () => (
    <Space
        direction="vertical"
        style={{
            width: '100%',
        }}
        size={[0, 48]}
    >

        <Layout>
            <Sider style={siderStyle}> <Navbar/> </Sider>
            <Layout>
                <Header style={headerStyle}> <OurHeader/> </Header>
                <Content style={contentStyle}></Content>
                {/*<Footer style={footerStyle}>Footer</Footer>*/}
            </Layout>
        </Layout>
    </Space>
);
export default AppAnt;
