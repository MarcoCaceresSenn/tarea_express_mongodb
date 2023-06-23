import Student from "../models/student.model.js";

export async function getStudent(req, res) {
    createStudent();
    try {
        const student = await Student.find();
        res.status(200).send(student);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

function createStudent(){
    const name = "Marco"
    const apellido = "Cáceres"
    Student.create({
        name,
        apellido,
    })
}