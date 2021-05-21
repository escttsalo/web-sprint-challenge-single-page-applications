

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
        </form>
    )
}