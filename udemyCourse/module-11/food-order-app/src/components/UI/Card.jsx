const Card = (props) => {
    return(
        <card className={`${props.className} w-3/5 shadow-sm rounded-sm`}>
            {props.children}
        </card>
    )
}

export default Card;