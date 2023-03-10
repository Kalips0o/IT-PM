import Icon from '@ant-design/icons';

function XSvg() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M18 6L6 18" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

export default function XIcon(props) {
    return <Icon component={XSvg} {...props} />;
}
