import React from "react";

const PizzaForm = (props) => {
    const { update, submit } = props;
    const { name, size, topping1, topping2, special } = props.values;

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
        </form>
    )
}

export default PizzaForm;