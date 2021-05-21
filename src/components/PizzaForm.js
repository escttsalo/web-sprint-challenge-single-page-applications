

export default function PizzaForm() {
    return (
        <form id='pizza-form'>
            <h2>Build your pizza!</h2>

            <div className='form-group inputs'>
                <h3>Name of Order</h3>
                <h5>Required</h5>
                    <input
                        value={''}
                        // onChange={null}
                        name='name'
                        id='name-input'
                        type='text'
                    />

                <h3>Choice of Size</h3>
                <h5>Required</h5>
                    <select 
                        onChange={null}
                        value={''}
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
                        onChange={null}
                        type='checkbox'
                        name='pepperoni'
                        checked={false}
                    />
                    Pepperoni
                </label>

                <label>
                    <input 
                        onChange={null}
                        type='checkbox'
                        name='canadian-bacon'
                        checked={false}
                    />Canadian Bacon
                </label>

                <label>
                    <input 
                        onChange={null}
                        type='checkbox'
                        name='bacon'
                        checked={false}
                    />Bacon
                </label>

                <label>
                    <input 
                        onChange={null}
                        type='checkbox'
                        name='sausage'
                        checked={false}
                    />Sausage
                </label>
            </div>

            <div className='form-group special'>
                <h3>Special Instructions</h3>
                <input 
                    value={''}
                    // onChange={null}
                    name='special'
                    id='special-text'
                    type='text'
                />
            </div>

            <div className='form-group submit'>
                <h3>Ready?</h3>
                <button disabled={true} id='order-button'>Submit</button>
            </div>
        </form>
    )
}