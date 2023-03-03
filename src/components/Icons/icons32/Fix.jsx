import Icon from '@ant-design/icons';

function FixSvg() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1069_7299)">
                <rect width="32" height="32" rx="16" fill="#C0DFFC" />
                <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z" fill="#C0DFFC" />
                <path d="M12.0341 21L10.9735 19.9394L7.75406 23.1588C7.6134 23.2995 7.5341 23.4905 7.5341 23.6895C7.5341 23.8884 7.61312 24.0791 7.75377 24.2198C7.89443 24.3604 8.08519 24.4395 8.2841 24.4395C8.48302 24.4395 8.67378 24.3604 8.81443 24.2198L12.0341 21Z" fill="#252525" />
                <path fillRule="evenodd" clipRule="evenodd" d="M18.2048 6.11639C18.2048 6.11639 18.4827 6 18.7841 6C18.7841 6 19.0854 6 19.3634 6.11639C19.3634 6.11639 19.6414 6.23278 19.8488 6.44342L25.526 12.1206C25.526 12.1206 25.7407 12.3321 25.8571 12.61C25.8571 12.61 25.9735 12.888 25.9735 13.1894C25.9735 13.1894 25.9735 13.4907 25.8571 13.7687C25.8571 13.7687 25.7407 14.0467 25.53 14.2541L20.0495 19.7346C20.0495 19.7346 20.5891 21.1999 20.1053 22.8608C20.1053 22.8608 19.732 24.1427 18.8117 25.3588C18.8117 25.3588 18.6148 25.6207 18.3267 25.7766C18.3267 25.7766 18.0386 25.9325 17.7117 25.9541C17.7117 25.9541 17.3848 25.9758 17.0787 25.8591C17.0787 25.8591 16.7726 25.7425 16.5475 25.5135L6.44355 15.4095C6.44355 15.4095 6.21649 15.1844 6.10096 14.8862C6.10096 14.8862 5.98544 14.5881 6.00154 14.2687C6.00154 14.2687 6.01764 13.9494 6.16257 13.6644C6.16257 13.6644 6.30749 13.3794 6.55645 13.1779C6.55645 13.1779 8.51768 11.5931 10.7961 11.6948C10.7961 11.6948 11.6007 11.7307 12.2289 11.9339L17.7153 6.44749C17.7153 6.44749 17.9268 6.23278 18.2048 6.11639ZM18.7841 7.5L12.9394 13.3447C12.7109 13.5733 12.3616 13.6297 12.0727 13.4847C12.0727 13.4847 11.5665 13.2307 10.7292 13.1933C10.7292 13.1933 9.0187 13.1169 7.49964 14.3443L12.5 19.5L17.6082 24.4528L17.6128 24.4574C17.6128 24.4574 18.3691 23.4579 18.6652 22.4414C18.6652 22.4414 19.0688 21.0557 18.4889 19.901C18.3438 19.612 18.4002 19.2627 18.6288 19.034L24.4694 13.1934L24.4735 13.1894L18.7881 7.50408L18.7841 7.5Z" fill="#252525" />
            </g>
            <defs>
                <clipPath id="clip0_1069_7299">
                    <rect width="32" height="32" rx="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default function FixIcon(props) {
    return <Icon component={FixSvg} {...props} />;
}
