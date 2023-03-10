import Icon from '@ant-design/icons';

function PollSvg() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1069_7260)">
                <path fillRule="evenodd" clipRule="evenodd" d="M25 7.5H8C7.72386 7.5 7.5 7.72386 7.5 8V25C7.5 25.2761 7.72386 25.5 8 25.5H25C25.2761 25.5 25.5 25.2761 25.5 25V8C25.5 7.72386 25.2761 7.5 25 7.5ZM8 6C6.89543 6 6 6.89543 6 8V25C6 26.1046 6.89543 27 8 27H25C26.1046 27 27 26.1046 27 25V8C27 6.89543 26.1046 6 25 6H8Z" fill="#252525" />
                <path d="M12.5623 10.4625C12.5623 11.6223 11.6221 12.5625 10.4623 12.5625C9.30251 12.5625 8.3623 11.6223 8.3623 10.4625C8.3623 9.30275 9.30251 8.36255 10.4623 8.36255C11.6221 8.36255 12.5623 9.30275 12.5623 10.4625Z" fill="#D36668" />
            </g>
            <defs>
                <clipPath id="clip0_1069_7260">
                    <rect width="21" height="21" fill="white" transform="translate(6 6)" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default function PollIcon(props) {
    return <Icon component={PollSvg} {...props} />;
}
