import React from "react";
import Qualities from "./qualitie";
import Bookmark from './bookmark';

const User = ({...user}) => {

    return (

    <tr>
        <td>{user.name}</td>
        <td> <Qualities qualities={user.qualities}/> </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td> <Bookmark handleToggleBookmark={user.onToggleBookmark} user={user} /> </td>
        <td>
            <button type="button" className="btn btn-danger" onClick={() => user.onDelete(user._id)}>
            Delete
            </button>
        </td>
    </tr>

    );
}

export default User;