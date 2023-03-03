import Icon from '@ant-design/icons';

function CalendarBlankSvg() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.75 3V2.25C15.75 1.83579 16.0858 1.5 16.5 1.5C16.9142 1.5 17.25 1.83579 17.25 2.25V3H19.5C19.5 3 20.1213 3 20.5607 3.43934C20.5607 3.43934 21 3.87868 21 4.5V19.5C21 19.5 21 20.1213 20.5607 20.5607C20.5607 20.5607 20.1213 21 19.5 21H4.5C4.5 21 3.87868 21 3.43934 20.5607C3.43934 20.5607 3 20.1213 3 19.5V4.5C3 4.5 3 3.87868 3.43934 3.43934C3.43934 3.43934 3.87868 3 4.5 3H6.75V2.25C6.75 1.83579 7.08579 1.5 7.5 1.5C7.91421 1.5 8.25 1.83579 8.25 2.25V3H15.75ZM4.5 9V19.5H19.5V9H4.5ZM19.5 7.5H4.5V4.5H6.75V5.25C6.75 5.66421 7.08579 6 7.5 6C7.91421 6 8.25 5.66421 8.25 5.25V4.5H15.75V5.25C15.75 5.66421 16.0858 6 16.5 6C16.9142 6 17.25 5.66421 17.25 5.25V4.5H19.5V7.5Z" fill="#252525" />
        </svg>
    );
}

export default function CalendarBlankIcon(props) {
    return <Icon component={CalendarBlankSvg} {...props} />;
}
