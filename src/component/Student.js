import React from 'react';
import {Outlet} from 'react-router-dom';
import {Paper,TableContainer,Table,TableBody,TableHead,TableRow,TableCell} from '@material-ui/core'; 
import {Link} from 'react-router-dom';
import './Student.css';

const studentDetails = [
    {
        "ID": "1",
        "Name": "John",
        "Age": "24",
        "Course": "MERN",
        "Batch": "October",
    },
    {
        "ID": "2",
        "Name": "Doe",
        "Age": "25",
        "Course": "MERN",
        "Batch": "November"
    },
    {
        "ID": "3",
        "Name": "Biden",
        "Age": "26",
        "Course": "MERN",
        "Batch": "September"
    },
    {
        "ID": "4",
        "Name": "Barar",
        "Age": "22",
        "Course": "MERN",
        "Batch": "September"
    },
    {
        "ID": "5",
        "Name": "Christ",
        "Age": "23",
        "Course": "MERN",
        "Batch": "October"
    },
    {
        "ID": "6",
        "Name": "Elent",
        "Age": "24",
        "Course": "MERN",
        "Batch": "November"
    }
];

const Student=()=>{
    return(
        <div>
        <div className='head'>
            <h1 className='left'>Student Page</h1>
            <button className='btn'>Add Student</button>
        </div>
        <div>

       
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Course</TableCell>
                            <TableCell>Batch</TableCell>
                            <TableCell>Change</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                                studentDetails.map(student => {
                                    const { ID, Name, Age, Course, Batch } = student;
                                    return (
                                        <TableRow key={ID}>
                                            <TableCell component="th" scope="row">{Name}</TableCell>
                                            <TableCell>{Age}</TableCell>
                                            <TableCell>{Course}</TableCell>
                                            <TableCell>{Batch}</TableCell>
                                            <TableCell><Link to="">Edit</Link></TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        
        <Outlet/>
        </div>
    );
}
export default Student;