import React from 'react'
import { connect } from 'react-redux'

import Navbar from '../Navbar/Navbar'
import BurgerContent from './BurgerContent'
import {
    addLettuce,
    removeLettuce,
    addBacon,
    removeBacon,
    addCheese,
    removeCheese,
    addMeat,
    removeMeat
} from '../../Redux/Burger/action'

import './Burger.css'

const Burger = props => {

    return (
        <>
            <Navbar />
            <div className='burger-content' />
            <div className='burger-ingredients'>
                <div className='top burger-image' />
                <BurgerContent Lettuce={props.lettuce} Bacon={props.bacon} Cheese={props.cheese} Meat={props.meat} />
                <div className='bottom burger-image' />
            </div>
            <div className='ingredients-block'>
                <div className='ingr-btns'>
                    <p>Lettuce</p>
                    <div>
                        <button onClick={() => { props.addLettuceRedux() }} className='ingr-btn'>Add</button>
                        <button onClick={() => { props.removeLettuceRedux() }} className='ingr-btn' >Remove</button>
                    </div>
                    <p>Bacon</p>
                    <div >
                        <button onClick={() => { props.addBaconRedux() }} className='ingr-btn'>Add</button>
                        <button onClick={() => { props.removeBaconRedux() }} className='ingr-btn' >Remove</button>
                    </div>
                    <p>Cheese</p>
                    <div >
                        <button onClick={() => { props.addCheeseRedux() }} className='ingr-btn'>Add</button>
                        <button onClick={() => { props.removeCheeseRedux() }} className='ingr-btn' >Remove</button>
                    </div>
                    <p>Meat</p>
                    <div >
                        <button onClick={() => { props.addMeatRedux() }} className='ingr-btn'>Add</button>
                        <button onClick={() => { props.removeMeatRedux() }} className='ingr-btn' >Remove</button>
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


export default connect(mapStateToProps, mapDispathToProps)(Burger)