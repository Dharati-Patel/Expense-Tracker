import './Button.scss';

const Button = ({name, icon, onClick, bg, bpad, color, bRad}) => {
    return(
        <section className='button' style={{
            background: bg,
            padding: bpad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </section>
    );
};

export default Button;