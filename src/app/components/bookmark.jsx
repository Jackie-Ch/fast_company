import React from "react";

const BookMark = ({ handleToggleBookmark, user }) => {

    const bookMark = (isBookmark) => {
        if (isBookmark === true) {
            return <i className="bi bi-bookmark-fill"></i>;
        }

        return <i className="bi bi-bookmark"></i>;
    };
    return (
        <>
            <button
                className="btn btn-light"
                onClick={() => handleToggleBookmark(user._id)}
            >
                {bookMark(user.bookmark)}
            </button>
        </>
    );
};

export default BookMark;
