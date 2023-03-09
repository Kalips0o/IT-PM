import { Collapse } from 'antd';
import { TableIcon } from '../../Icons';
import DeskMenu from './DeskMenu';

const { Panel } = Collapse;
const headerIco = <TableIcon />;

function DeskAccordion() {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
            <Panel showArrow={false} header={headerIco} key="2">
                <DeskMenu />
            </Panel>
        </Collapse>
    );
}

export default DeskAccordion;
