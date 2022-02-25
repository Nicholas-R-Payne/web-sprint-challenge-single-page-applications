import React from "react";

const PizzaForm = (props) => {
    const { update, submit } = props;
    const { name, size, pepperoni, sausage, bacon, ham, special } = props.values;

    return (
        <form id='pizza-form'>

            <label>Name
                <input id='name-input'
                    name='name'
                    type='text'
                    placeholder='Enter your name.'
                    value={name}
                />
            </label>

            <label>Size
                <select id='size-dropdown'
                    name='size'
                    value={size}
                >
                    <option value=''>- Select a Size -</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>

            <h4>Toppings</h4>
            <label>Pepperoni
                <input
                    type='checkbox'
                    name='pepperoni'
                    checked={pepperoni}
                />
            </label>
            <label>Sausage
                <input
                    type='checkbox'
                    name='sausage'
                    checked={sausage}
                />
            </label>
            <label>Bacon
                <input
                    type='checkbox'
                    name='bacon'
                    checked={bacon}
                />
            </label>
            <label>Ham
                <input
                    type='checkbox'
                    name='ham'
                    checked={ham}
                />
            </label>
        </form>
    )
}

export default PizzaForm;