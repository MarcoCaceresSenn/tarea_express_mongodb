import User from "../models/user.model.js";

export async function createUser(req, res) {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const dni = req.body.dni;
        const password = req.body.password;
        const missingFields = [];

        if (!name) {
            missingFields.push('name');
        }
        if (!email) {
            missingFields.push('email');
        }
        if (!dni) {
            missingFields.push('dni');
        }
        if (!password) {
            missingFields.push('password');
        }
        
        if (missingFields.length > 0) {
            const errorMessage = `error: falta ${missingFields.join(', ')} campo(s)`;
            throw new Error(errorMessage);
        }

        await User.create({
            name,
            email,
            dni,
            password,
        });
        res.status(200).send({ success:true });
    } catch (error) {
        if (errorMessage.charAt(0) === "e")
        res.status(400).send({ message: errorMessage });
        else{
            res.syatus(500).sent({message: "campo error"})
        }
    } 
}