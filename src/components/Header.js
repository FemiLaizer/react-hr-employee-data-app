import React from 'react'
import Button from './Button'

const Header = ({ title, addNewStaff }) => {
    return (
        <header className='header'>
            <h2>{title}</h2>
            <Button color={"green"} text="Add New Staff" btnClick={addNewStaff} />
        </header>
    )
}

export default Header