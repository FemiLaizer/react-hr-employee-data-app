import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import StaffList from './components/StaffList';
import AddStaff from './components/AddStaff';

function App() {

  const [employees, setEmployees] = useState([]);

  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const getEmployees = async () => {
      const dataFromServer = await fetchEmployees()
      setEmployees(dataFromServer)
    }

    getEmployees()
  }, [])

  // Fetch Employee Data from Database
  const fetchEmployees = async () => {
    const res = await fetch('http://localhost:5000/employees')

    const data = await res.json()

    return data;
  }

  // ADD Employee to Database Staff List
  const addEmployee = async (employee) => {
    // console.log(employee);
    const res = await fetch('http://localhost:5000/employees', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(employee)
    })

    const data = await res.json()

    setEmployees([...employees, data])
  }

  // Delete Employee from Database Staff List
  const deleteEmployee = async (id) => {
    // console.log("delete", id);
    await fetch(`http://localhost:5000/employees/${id}`, {
      method: 'DELETE'
    })

    setEmployees(employees.filter((employee) => employee.id !== id))
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}><h2>HR Employee Data Form</h2></div>

      <Header title={""} addNewStaff={() => setShowForm(!showForm)} />

      {/* Showing Form toggle Button, changes the state from false to true when button in "Header" is clicked */}
      {showForm && <AddStaff employees={employees} addEmployee={addEmployee} />}

      <StaffList staffData={employees} deleteEmployee={(id) => deleteEmployee(id)} />
    </div>
  );
}

export default App;
