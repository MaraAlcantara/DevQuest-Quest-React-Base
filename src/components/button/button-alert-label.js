import './button.css'

const Button = (props) => {
    
    const msgAlert = () => {
        alert(`A label desse botão é ${props.label}`);
    }

    return (    
        <div>
            <button className='btn' onClick = {msgAlert}>{props.label}</button>
        </div>
    );
}

export default Button;
