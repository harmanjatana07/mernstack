import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CssTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';


export class ShoppingList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [
                {id : uuid(), name: 'Eggs'},
                {id : uuid(), name: 'Milk'},
                {id : uuid(), name: 'Steak'},
                {id : uuid(), name: 'Water'}
            ] 
        }
    }
    getItemName = () => {
        const name = prompt('Enter Item');
        console.log(name);
    }
    render() {
        const {items} = this.state;
        return (
            <Container>
                <Button color="dark" style={{marginBottom:'2rem'}}
                        onClick={this.getItemName}>Add Item</Button>
            </Container>
        )
    }
}

export default ShoppingList
