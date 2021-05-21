

export default function PizzaForm(props) {

    const {values, change, submit, disabled, errors } = props

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    const onChange = e => {
        const { name, value, type, checked } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }


    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h2>Build your pizza!</h2>

            <div className='form-group inputs'>
                <h3>Name of Order</h3>
                <h5>Required</h5>
                <div>{errors.name}</div>
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        id='name-input'
                        type='text'
                    />

                <h3>Choice of Size</h3>
                <h5>Required</h5>
                <div>{errors.size}</div>
                    <select 
                        onChange={onChange}
                        value={values.size}
                        name='size'
                        id='size-dropdown'
                    >
                        <option value=''>Select</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                        <option value='Extra Large'>XLarge</option>
                        <option value='Texas'>I'm from Texas!</option>
                    </select>
            </div>

            <div className='form-group checkboxes'>
                <h3>Choose your Toppings</h3>
                <label>
                    <input 
                        onChange={onChange}
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                    />
                    Pepperoni
                </label>

                <label>
                    <input 
                        onChange={onChange}
                        type='checkbox'
                        name='canadian_bacon'
                        checked={values.canadian_bacon}
                    />Canadian Bacon
                </label>

                <label>
                    <input 
                        onChange={onChange}
                        type='checkbox'
                        name='bacon'
                        checked={values.bacon}
                    />Bacon
                </label>

                <label>
                    <input 
                        onChange={onChange}
                        type='checkbox'
                        name='sausage'
                        checked={values.sausage}
                    />Sausage
                </label>
            </div>

            <div className='form-group special'>
                <h3>Special Instructions</h3>
                <input 
                    value={values.special}
                    onChange={onChange}
                    name='special'
                    id='special-text'
                    type='text'
                />
            </div>

            <div className='form-group submit'>
                <h3>Ready?</h3>
                <button disabled={false} id='order-button'>Submit</button>
            </div>
        </form>
    )
}