const employee = require('../model/employee')


// Show list of employees
const index =  async (req, res) => {
    try {
        const allEmployee =  await employee.find({})
        if(!allEmployee){
            res.json({message: "No tasks found"})
        }
        else{
            res.status(200).send(allEmployee)
        }
    } catch (error) {
        res.status(401).send(error)
    }
}

// show single employee
const show = async (req, res) => {
    try {
        let employeeId = req.params.id;
        console.log(employeeId);
        const emp = await employee.findOne({_id: employeeId})
        console.log(emp);
        res.status(201).json({ emp })
    } catch (error) {
        res.status(400).send(error)
    }
}

// Store new employee to the data base
const store = async (req, res) => {
    try {
        let addEmployee = new employee({
            name: req.body.name,
            designation: req.body.designation,
            email: req.body.email,
            phone: req.body.phone,
            age: req.body.age
        })
        const  newEmployee = await addEmployee.save()
        if (newEmployee) {
            res.json({
                message: 'Employee saved'
            })
            
        } else {
            res.status(400).send(error)
        }
    } catch (error) {
        res.json ({
            message: ' An error occure'
        })
    }
}

// Update employee by employeeName
const update =async (req, res) => {
    try {
        let employeeId= req.params.id;
        let updateData = {
            name: req.body.name,
            designation: req.body.designation,
            email: req.body.email,
            phone: req.body.phone,
            age: req.body.age
        }
        const replaceEmployee = await employee.findByIdAndUpdate({_id: employeeId}, {$set: updateData})
        if (replaceEmployee) {
            res.json({
                message: 'Employee updated successfully'
            })
        } else {
            res.status(400).send(error)
            
        }
    } catch (error) {
        res.json({
            message: 'An error occured'
        })
        
    }
}

// Delete an employee
const destroy = async (req, res) => {
    try {
        let employeeId = req.params.id;
        const destroyEmployee = await employee.findByIdAndRemove({_id: employeeId})
        if (destroyEmployee) {
            res.json({
                message: 'Employee deleted successfully'
            })           
        } else {
            res.status(400).send(error)
        }
    } catch (error) {
        res.json({
            message: 'An error occured'
        })
    }
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}