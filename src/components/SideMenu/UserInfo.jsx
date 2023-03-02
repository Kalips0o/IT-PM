import styles from './UserInfo.module.css';

function UserInfo() {
    return (
        <div style={styles.userInfoText}>
            <text>Добро пожаловать</text>
            <h1>User Name </h1>
            <p>Nick Name</p>
        </div>
    );
}

export default UserInfo;
