import Icon from '@ant-design/icons';

function PlusSvg() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 12.75H20.25C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25H3.75C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75Z" fill="#252525" />
            <path d="M11.25 3.75V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V3.75C12.75 3.33579 12.4142 3 12 3C11.5858 3 11.25 3.33579 11.25 3.75Z" fill="#252525" />
        </svg>
    );
}

export default function PlusIcon(props) {
    return <Icon component={PlusSvg} {...props} />;
}
