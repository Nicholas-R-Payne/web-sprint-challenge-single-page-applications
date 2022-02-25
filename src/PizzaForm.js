import React from 'react';

const PizzaForm = (props) => {
    const { update, submit } = props;

    const { name, size, topping1, topping2, special } = props.values;
    console.log(name)

    const onChange = (evt) => {
        const {name, value} = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit()
    }

    return (
        <form className='pizza-form' onSubmit={onSubmit}>
            <label>Name
                <input
                    name='name'
                    type='text'
                    placeholder='Enter your name.'
                    value={name}
                    onChange={onChange}
                />
            </label>

            <div className='submit'>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default PizzaForm;