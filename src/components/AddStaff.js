import { React, useState } from 'react'

const AddStaff = ({ employees, addEmployee }) => {

    const submitForm = (e) => {
        e.preventDefault();

        if (!(first && middle && surname && email)) {
            alert("Please fill required fields")
            return;
        }

        addEmployee({ first, middle, surname, email, phone, gender, marital, location, dept, unit, position, status })
    }

    const [first, setFirst] = useState("")
    const [middle, setMiddle] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")
    const [marital, setMarital] = useState("")
    const [location, setLocation] = useState("")
    const [dept, setDept] = useState("")
    const [unit, setUnit] = useState("")
    const [position, setPosition] = useState("")
    const [status, setStatus] = useState("Inactive")

    return (
        <form className='add-form' onSubmit={submitForm}>
            <div className='form-control'>
                <label>First Name</label>
                <input type='text' id='First Name' placeholder='Add First Name' value={first} onChange={(e) => setFirst(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Middle Name</label>
                <input type='text' placeholder='Add Middle Name' value={middle} onChange={(e) => setMiddle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Surname</label>
                <input type='text' placeholder='Add Surname' value={surname} onChange={(e) => setSurname(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' placeholder='Add Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>


            <div className='form-control'>
                <label>Phone</label>
                <input type='text' placeholder='Add Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className='form-control form-control-check'>
                <label>Gender</label>
                <input type='radio' name='Gender' value={gender} checked={gender} onChange={(e) => setGender(e.currentTarget.checked === true ? "Male" : "Female")} />
                <span>Male</span>
                <input type='radio' name='Gender' value={gender} onChange={(e) => setGender(e.currentTarget.checked === true ? "Female" : "Male")} />
                <span>Female</span>
            </div>

            <div className='form-control form-control-check '>
                <label>Marital</label>
                <input type='checkbox' name='Marital' value={marital} onChange={(e) => setMarital(e.currentTarget.checked === true ? "Single" : false)} />
                <span>Single</span>
                <input type='checkbox' name='Marital' value={marital} onChange={(e) => setMarital(e.currentTarget.checked === true ? "Married" : false)} />
                <span>Married</span>
                <input type='checkbox' name='Marital' value={marital} onChange={(e) => setMarital(e.currentTarget.checked === true ? "Divorced" : false)} />
                <span>Divorced</span>
            </div>

            <div className='form-control'>
                <label>Location</label>
                <input type='text' placeholder='Add Location' value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Department</label>
                <input type='text' placeholder='Add Department' value={dept} onChange={(e) => setDept(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Unit</label>
                <input type='text' placeholder='Add Units' value={unit} onChange={(e) => setUnit(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Position</label>
                <input type='text' placeholder='Add Position' value={position} onChange={(e) => setPosition(e.target.value)} />
            </div>

            <div className='form-control form-control-check'>
                <label>Status</label>
                <input type='checkbox' value={status} onChange={(e) => setStatus(e.currentTarget.checked === false ? "Inactive" : "Active")} />
            </div>

            <input type='submit' value="Save Form" className='btn' />
        </form>
    )
}

export default AddStaff