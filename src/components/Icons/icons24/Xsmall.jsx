import Icon from '@ant-design/icons';

function XsmallSvg() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9L15 15M15 9L9 15" stroke="#252525" strokeLinecap="round" />
        </svg>
    );
}

export default function XsmallIcon(props) {
    return <Icon component={XsmallSvg} {...props} />;
}
