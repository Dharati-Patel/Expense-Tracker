import './Button.scss';

const Button = ({name, icon, onClick, bg, bpad, color, bRad}) => {
    return(
        <button className='button' style={{
            background: bg,
            padding: bpad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </button>
    );
};

export default Button;