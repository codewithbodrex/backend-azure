import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req,res)=>{
    console.log(users);
    res.send(users);
}


export const createUser =  (req,res)=>{
    const user = req.body;

    users.push({ ...user, id:uuidv4() });
    res.send(`User with this username: ${user.username} has been uploaded`);
}

export const getUser =  (req,res)=>{
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser =  (req,res)=>{
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);

    res.send(`this id : ${id} has been deleted`);
}

export const updateUser = (req,res)=>{
    const { id } = req.params;
    const {username , age} = req.body;
    const user = users.find((user) => user.id === id);

    if(username) user.username =  username;
    if(age) user.age =  age;

    res.send(`this id : ${id} has been update`);
}