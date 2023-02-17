import React, { Component } from 'react';
import { useState } from 'react';
import {render} from "react-dom";

let nextId = 0;
let initialList = [
    {
        id: nextId++,
        name: 'Иванов Иван Иванович',
        birthday: '23.11.1994',
        phone: '78932342354',
        email: 'ivan@mail.ru',
        days: 20,
        wage: 2300
    },

    {
        id: nextId++,
        name: 'Иванов Иван Иванович',
        birthday: '23.11.1994',
        phone: '78932342354',
        email: 'ivan@mail.ru',
        days: 20,
        wage: 2300
    },

    {
        id: nextId++,
        name: 'Иванов Иван Иванович',
        birthday: '23.11.1994',
        phone: '78932342354',
        email: 'ivan@mail.ru',
        days: 20,
        wage: 2300
    },

    {
        id: nextId++,
        name: 'Иванов Иван Иванович',
        birthday: '23.11.1994',
        phone: '78932342354',
        email: 'ivan@mail.ru',
        days: 20,
        wage: 2300
    }
];

let App = function List() {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState();
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [days, setDays] = useState();
    const [wage, setWage] = useState();
    const [employees, setEmployees] = useState([initialList]);

    let res = initialList.map(function (employee) {
        return <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.birthday}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.days}</td>
            <td>{employee.wage}</td>
        </tr>
    });
    return (
        <>
            <table border="1px">
                <thead>
                <tr>
                    <td>Имя</td>
                    <td>Дата рождения</td>
                    <td>Телефон</td>
                    <td>Почта</td>
                    <td>Дни работы</td>
                    <td>Дневная ставка</td>
                </tr>
                </thead>
                <tr>
                    <td><input
                        value={name}
                        onChange={e => setName(e.target.value)}/></td>
                    <td><input
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}/></td>
                    <td><input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}/></td>
                    <td><input
                        value={mail}
                        onChange={e => setMail(e.target.value)}/></td>
                    <td><input
                        value={days}
                        onChange={e => setDays(e.target.value)}/></td>
                    <td><input
                        value={wage}
                        onChange={e => setWage(e.target.value)}/></td>
                </tr>
                <tbody>
                {res}
                </tbody>
            </table>

            <h1>Добавить работника:</h1>
            <button onClick={() => {
                setName('');
                setBirthday('');
                setPhone('');
                setMail('');
                setDays('');
                setWage('');
                setEmployees([
                    ...employees,
                    {
                        id: nextId++,
                        name: name,
                        birthday: birthday,
                        phone: phone,
                        mail: mail,
                        days: days,
                        wage: wage
                    }
                ]);

            }}>Add
            </button>
            <button onClick={res}>Update</button>
        </>
    );
}

class Employees extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <App />
            </div>
        );
    }
}

export default Employees;