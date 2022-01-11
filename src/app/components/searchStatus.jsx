import React from "react";

const SearchStatus = ({length}) => {
    const fun= ()=>{
        return length === 4 || length === 3 || length === 2 ? 'человека' : 'человек'
    }
       return length
           ? <span className='badge btn-primary'>{length} {fun()} тусанет с тобой сегодня</span>
           : <span className='badge btn-danger'>Никто с тобой не тусанет</span>
}

export default SearchStatus;