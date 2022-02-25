import React from "react";

const PizzaForm = (props) => {
    const { update, submit } = props;
    const { name, size, topping1, topping2, special } = props.values;

    return (
        <form id='pizza-form'>
            <label>Name
                <input
                    name='name'
                    type='text'
                    placeholder='Enter your name.'
                    value={name}
                />
            </label>
        </form>
    )
}

export default PizzaForm;