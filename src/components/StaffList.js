import React from 'react'
import Staff from './Staff'
import StaffItem from './StaffItem';

const StaffList = ({ staffData, deleteEmployee }) => {
    return (
        <div className='StaffList'>
            <div style={{ textAlign: "center", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid grey" }}><h2>List of Employee</h2></div>
            <StaffItem />
            <div style={{}}>
                {staffData.map(staff => {
                    return (
                        <Staff
                            key={staff.id}
                            employee={staff}
                            deleteStaff={(id) => deleteEmployee(id)} />
                    )
                })}
            </div>
        </div>
    )
}

export default StaffList