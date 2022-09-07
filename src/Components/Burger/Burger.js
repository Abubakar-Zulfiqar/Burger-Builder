import React, { useState } from 'react'
import '../Burger/Burger.css';

const Burger = () => {
    const [state, setState] = useState({
        Lettuce: 0,
        Bacon: 0,
        Cheese: 0,
        Meat: 0
    })

    const addRemoveIngredient = (action, ingredient) => {
        let {
            Lettuce,
            Bacon,
            Cheese,
            Meat
        } = state;

        let stateValue;

        switch (ingredient) {
            case 'Lettuce':
                stateValue = Lettuce;
                break;
            case 'Bacon':
                stateValue = Bacon;
                break;
            case 'Cheese':
                stateValue = Cheese;
                break;
            case 'Meat':
                stateValue = Meat;
                break;
            default: break;
        }
        if (action === 'add') {
            stateValue = stateValue + 1;
        } else {
            stateValue = stateValue - 1;
        }
        setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    const burgerContent = () => {
        let {
            Lettuce,
            Bacon,
            Cheese,
            Meat
        } = state;

        let burger = [];

        for (let i = 0; i < Lettuce; i++) {
            burger.push(<div key={burger.length} className="lettuce burger-image" />);
        }
        for (let i = 0; i < Bacon; i++) {
            burger.push(<div key={burger.length} className="bacon burger-image" />);
        }
        for (let i = 0; i < Cheese; i++) {
            burger.push(<div key={burger.length} className="cheese burger-image" />);
        }
        for (let i = 0; i < Meat; i++) {
            burger.push(<div key={burger.length} className="meat burger-image" />);
        }
        if (burger.length === 0)
            burger.push(<p key="0">No Ingredients Added</p>);
        return burger;
    }

    return (
        <>
            <div className="burgerIngredients">
                <div className="top burger-image" />
                {burgerContent()}
                <div className="bottom burger-image" />
            </div>
            <div className="mainContent">
                <div className="ingredientsBlock">
                    <div className="ingrBtns">
                        <p>Lettuce</p>
                        <div>
                            <button onClick={() => addRemoveIngredient('add', 'Lettuce')} className='ingrBtn'>Add</button>
                            <button onClick={() => addRemoveIngredient('remove', 'Lettuce')} className='ingrBtn' id='removeBtn'>Remove</button>
                        </div>
                        <p>Bacon</p>
                        <div >
                            <button onClick={() => addRemoveIngredient('add', 'Bacon')} className='ingrBtn'>Add</button>
                            <button onClick={() => addRemoveIngredient('remove', 'Bacon')} className='ingrBtn' id='removeBtn'>Remove</button>
                        </div>
                        <p>Cheese</p>
                        <div >
                            <button onClick={() => addRemoveIngredient('add', 'Cheese')} className='ingrBtn'>Add</button>
                            <button onClick={() => addRemoveIngredient('remove', 'Cheese')} className='ingrBtn' id='removeBtn'>Remove</button>
                        </div>
                        <p>Meat</p>
                        <div >
                            <button onClick={() => addRemoveIngredient('add', 'Meat')} className='ingrBtn'>Add</button>
                            <button onClick={() => addRemoveIngredient('remove', 'Meat')} className='ingrBtn' id='removeBtn'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Burger;