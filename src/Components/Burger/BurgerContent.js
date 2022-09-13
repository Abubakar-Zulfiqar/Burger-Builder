import React from 'react'

const BurgerContent = props => {
    let {
        Lettuce,
        Bacon,
        Cheese,
        Meat
    } = props
    let burger = []
    for (let i = 0; i < Lettuce; i++) {
        burger.push(<div key={burger.length} className='lettuce burger-image' />)
    }
    for (let i = 0; i < Bacon; i++) {
        burger.push(<div key={burger.length} className='bacon burger-image' />)
    }
    for (let i = 0; i < Cheese; i++) {
        burger.push(<div key={burger.length} className='cheese burger-image' />)
    }
    for (let i = 0; i < Meat; i++) {
        burger.push(<div key={burger.length} className='meat burger-image' />)
    }
    if (burger.length === 0)
        burger.push(<p key='0'>No Ingredients Added</p>)

    return (
        <div>{burger}</div>
    )
}

export default BurgerContent