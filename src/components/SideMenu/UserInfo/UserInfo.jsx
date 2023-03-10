import styles from './UserInfo.module.css';

function UserInfo() {
    return (
        <div className={styles.userInfoText}>
            <h1>Добро пожаловать</h1>
            <h1>User Name </h1>
            <p>Nick Name</p>
        </div>
    );
}

export default UserInfo;
