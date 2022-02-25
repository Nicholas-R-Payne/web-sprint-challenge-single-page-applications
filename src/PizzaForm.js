import React from "react";

const PizzaForm = (props) => {
    const { update, submit, errors } = props;
    const { name, size, pepperoni, sausage, bacon, ham, special } = props.values;

    const onChange = (evt) => {
        const {name, value} = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit()
    }
    
    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h2>Build Your Own Pizza</h2>

            <div id='errors'>
                <div>{errors.name}</div>
            </div>

            <label>Name
                <input id='name-input'
                    name='name'
                    type='text'
                    placeholder='Enter your name.'
                    value={name}
                    onChange={onChange}
                />
            </label>
            <br /><br />
            <label>Size
                <select id='size-dropdown'
                    name='size'
                    value={size}
                    onChange={onChange}
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
                    onChange={onChange}
                />
            </label>
            <br />
            <label>Sausage
                <input
                    type='checkbox'
                    name='sausage'
                    checked={sausage}
                    onChange={onChange}
                />
            </label>
            <br />
            <label>Bacon
                <input
                    type='checkbox'
                    name='bacon'
                    checked={bacon}
                    onChange={onChange}
                />
            </label>
            <br />
            <label>Ham
                <input
                    type='checkbox'
                    name='ham'
                    checked={ham}
                    onChange={onChange}
                />
            </label>
            <br /><br />
            <label>Special Instructions
                <input id='special-text'
                    name='special'
                    type='text'
                    placeholder='Enter any special instructions.'
                    value={special}
                    onChange={onChange}
                />
            </label>
            <br /> <br />
            <div>
                <button id='order-button'>Order</button>
            </div>
        </form>
    )
}

export default PizzaForm;