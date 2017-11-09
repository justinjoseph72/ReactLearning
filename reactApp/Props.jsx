import React from 'react';

class Props extends React.Component{
    constructor(props){
        super(props);

        this.state={
            header: "This is the header from state....",
            content: "This is s content form state....."
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.header}</h1>
                <h1>{this.state.content}</h1>
                <h2>{this.props.headerProps}</h2>
                <h2>{this.props.contentProps}</h2>
            </div>
        );
    }
}

export default Props;