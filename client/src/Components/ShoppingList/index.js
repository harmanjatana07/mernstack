import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import uuid from 'uuid';
import './index.scss';


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
        if(name){
            this.setState((state)=> ({
                items : [...state.items, {id:uuid(), name}]
            }))
        }
    }
    onClick = (e) => {
        const id = e.target.value;
        this.setState(({items})=>({
            items: items.filter(item =>(
                item.id !== id
            ))
        }))
    }
    render() {
        const {items} = this.state;
        return (
            <Container>
                <Button color="dark" style={{marginBottom:'2rem'}}
                        onClick={this.getItemName}>Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id, name}) => ( 
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onClick} value={id}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                         ) )}
                    </TransitionGroup>    
                </ListGroup>

            </Container>
        )
    }
}

export default ShoppingList
