import React from 'react';

class Something extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        "id": 1,
                        "name": "Justin",
                        "age": "31"
                    },
                    {
                        "id": 2,
                        "name": "Saumya",
                        "age": "31"
                    },
                    {
                        "id": 3,
                        "name": "Robin",
                        "age": "29"
                    }
                ]
        }
    }

    render() {
        return (
            <div>
                <Header1/>
                <table>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Header1 extends React.Component {
    render() {
        return (
            <h1>Person details!!!</h1>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default Something;