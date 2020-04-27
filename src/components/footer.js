import React, { Component } from 'react';
import { CtxConsumer } from '../index';

/* eslint-disable */

class Footer extends Component {

    state = {
        name: 'Cameron',
        age: 0,
        isLogin: true
    }

    componentDidMount(){
        this.setState({name: 'MyName'});
        // subscribe
    }

    changed = evt => {
        this.setState({name: evt.target.value});
        console.log(this.state.name);  
    }

    render() {
        return (
            <CtxConsumer>
                {context => (
                    <div>
                        {context.animals && context.animals.map(animal => {
                            return (
                                <div key={animal}>
                                    <h1>{animal}</h1>
                                </div>
                            );
                        }) }
                    </div>
                )}
            </CtxConsumer>    
        );
    }
}

export default Footer;