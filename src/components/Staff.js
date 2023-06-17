import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './Staff.css'

const Staff = ({ employee, deleteStaff }) => {
    const delStaff = (id) => {
        deleteStaff(id);
    }
    return (
        <>
            <div className='Staff'>
                <table>
                    <tbody>
                        <tr>
                            <td> {employee.first}</td>
                            <td> {employee.middle}</td>
                            <td> {employee.surname}</td>
                            <td> {employee.email}</td>
                            <td> {employee.phone}</td>
                            <td> {employee.gender}</td>
                            <td> {employee.marital}</td>
                            <td> {employee.location}</td>
                            <td> {employee.dept}</td>
                            <td> {employee.unit}</td>
                            <td> {employee.position}</td>
                            <td style={{ color: employee.status === "Active" ? "green" : "red" }}> {employee.status}</td>
                            <td style={{ color: "red", cursor: "pointer" }} ><FaTimes onClick={() => delStaff(employee.id)} /></td>
                        </tr>
                    </tbody>
                </table>
            </div >
        </>

    )
}

export default Staff