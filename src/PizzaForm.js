import React from 'react';

const PizzaForm = (props) => {
    const { values, update, submit } = props;
    const { name, size, topping1, topping2, special } = props.values;

    const onChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit()
    }

    return (
        <form className='pizza-form' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                    <input className='name-input'
                        name='name'
                        type='text'
                        placeholder='Enter your name.'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}