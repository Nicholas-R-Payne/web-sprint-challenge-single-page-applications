import React from 'react';

export default function PizzaForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    return (
        <form className='pizza-form'>
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
            </div>
        </form>
    )
}