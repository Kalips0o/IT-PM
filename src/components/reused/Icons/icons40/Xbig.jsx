import Icon from '@ant-design/icons';

function XbigSvg() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12L30 30M30 12L12 30" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

export default function XbigIcon(props) {
    return <Icon component={XbigSvg} {...props} />;
}
