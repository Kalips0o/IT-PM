import Icon from '@ant-design/icons';

function CaretRightSvg() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5858 16L11.2929 25.2929C11.1054 25.4804 11 25.7348 11 26C11 26.2652 11.1054 26.5196 11.2929 26.7071C11.4804 26.8946 11.7348 27 12 27C12.2652 27 12.5196 26.8946 12.7071 26.7071L22.7071 16.7071C23.0976 16.3166 23.0976 15.6834 22.7071 15.2929L12.7071 5.29289C12.5196 5.10536 12.2652 5 12 5C11.7348 5 11.4804 5.10536 11.2929 5.29289C11.1054 5.48043 11 5.73478 11 6C11 6.26522 11.1054 6.51957 11.2929 6.70711L20.5858 16Z" fill="#252525" />
        </svg>
    );
}

export default function CaretRightIcon(props) {
    return <Icon component={CaretRightSvg} {...props} />;
}
