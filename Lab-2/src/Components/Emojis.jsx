function Emoji(props){
    return(
        <>
        <span 
        role="img"
        aria-label={props.arialLabel}
        className='react-emojis'>
            {props.newEmoji}
        </span>
        </>
    )
}

export default Emoji;