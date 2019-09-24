import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import Dishdetail from './DishdetailComponent'

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {  
            selectedDish: null          
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish})
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        
                        <CardImg widt="100%" object src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">{menu}</div>
                <Dishdetail dish={this.state.selectedDish}></Dishdetail>
            </div>

        )
    }
}

export default Menu