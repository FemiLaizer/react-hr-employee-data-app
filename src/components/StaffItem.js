import React from 'react'
import './StaffItem.css'

const StaffItem = () => {
    return (
        <div className='StaffItem'>
            <table>
                <thead>
                    <tr>
                        <td>First_Name</td>
                        <td>Middle_Name</td>
                        <td>Surname</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Gender</td>
                        <td>Marital</td>
                        <td>Location</td>
                        <td>Department</td>
                        <td>Unit</td>
                        <td>Position</td>
                        <td>Status</td>
                        <td >Remove</td>
                    </tr>
                </thead>
            </table>
        </div >
    )
}

export default StaffItem