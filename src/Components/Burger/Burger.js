import React from 'react'
import { connect } from 'react-redux';

import Navbar from '../Navbar/Navbar'
import BurgerContent from './BurgerContent';
import {
    addLettuce,
    removeLettuce,
    addBacon,
    removeBacon,
    addCheese,
    removeCheese,
    addMeat,
    removeMeat
} from '../../Redux/Burger/action';

import './Burger.css';

const Burger = (props) => {

    return (
        <>
            <Navbar />
            <div className="burgerContent" />
            <div className="burgerIngredients">
                <div className="top burger-image" />
                <BurgerContent Lettuce={props.lettuce} Bacon={props.bacon} Cheese={props.cheese} Meat={props.meat} />
                <div className="bottom burger-image" />
            </div>
            <div className="ingredientsBlock">
                <div className="ingrBtns">
                    <p>Lettuce</p>
                    <div>
                        <button onClick={() => { props.addLettuceRedux() }} className='ingrBtn'>Add</button>
                        <button onClick={() => { props.removeLettuceRedux() }} className='ingrBtn' >Remove</button>
                    </div>
                    <p>Bacon</p>
                    <div >
                        <button onClick={() => { props.addBaconRedux() }} className='ingrBtn'>Add</button>
                        <button onClick={() => { props.removeBaconRedux() }} className='ingrBtn' >Remove</button>
                    </div>
                    <p>Cheese</p>
                    <div >
                        <button onClick={() => { props.addCheeseRedux() }} className='ingrBtn'>Add</button>
                        <button onClick={() => { props.removeCheeseRedux() }} className='ingrBtn' >Remove</button>
                    </div>
                    <p>Meat</p>
                    <div >
                        <button onClick={() => { props.addMeatRedux() }} className='ingrBtn'>Add</button>
                        <button onClick={() => { props.removeMeatRedux() }} className='ingrBtn' >Remove</button>
                    </div>
                </div>
            </div>
        </>
    )

}

const mapStateToProps = state => {
    return {
        lettuce: state.lettuce,
        bacon: state.bacon,
        cheese: state.cheese,
        meat: state.meat
    }
}
const mapDispathToProps = dispatch => {
    return {
        addLettuceRedux: () => dispatch(addLettuce()),
        removeLettuceRedux: () => dispatch(removeLettuce()),
        addBaconRedux: () => dispatch(addBacon()),
        removeBaconRedux: () => dispatch(removeBacon()),
        addCheeseRedux: () => dispatch(addCheese()),
        removeCheeseRedux: () => dispatch(removeCheese()),
        addMeatRedux: () => dispatch(addMeat()),
        removeMeatRedux: () => dispatch(removeMeat()),
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Burger);