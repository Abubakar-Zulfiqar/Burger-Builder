// import React, { useState } from 'react'

// const Footer = () => {
//     const initialState = [
//         { name: 'lettuce', quantity: 0, price: 10, },
//         { name: 'Bacon', quantity: 0, price: 10, },
//         { name: 'Cheese', quantity: 0, price: 10, },
//         { name: 'Meat', quantity: 0, price: 10, }
//     ];

//     const [ingredients, setIngredients] = useState(initialState);

//     const add = (name) => {
//         setIngredients(prevState => {
//             const newState = prevState.map(obj => {
//                 if (obj.name === name.name) {
//                     return { ...obj, quantity: name.quantity++ };
//                 }

//                 return obj;
//             });

//             return newState;
//         });
//         console.log(ingredients)
//     };

//     const remove = (name) => {
//         setIngredients(prevState => {
//             const newState = prevState.map(obj => {
//                 if (obj.name === name) {
//                     return { ...obj, quantity: name.quantity-- };
//                 }

//                 return obj;
//             });

//             return newState;
//         });
//     };

//     return (
//         <>
//             <div className="burgerIngredients">
//                 <div className="top burger-image" />
//                 {ingredients.map((ing, index) => (
//                     <div key={index}>
//                         <div >{ing.name}</div>
//                         <button onClick={() => add(ing)} className='ingrBtn' id='addBtn'>Add</button>
//                         <button onClick={() => remove(ing)} className='ingrBtn' id='removeBtn'>Remove</button>
//                     </div>
//                 ))}
//                 <div className="bottom burger-image" />
//             </div>

//         </>
//     )
// }

// export default Footer;