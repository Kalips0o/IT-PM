import {UserAvatar} from "./Avatar";
import {UserInfo} from "./UserInfo";
import React from "react";

const Header = () => {
    return (

        <div className='block'>
            <UserAvatar/>
            <UserInfo/>
            <div> Chat </div>
        </div>
    )
}
export default Header
