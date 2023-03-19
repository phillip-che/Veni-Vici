const BanList = ({banned, onClick}) => {

    return (
        <div className="BanList">
            <h2>Ban List</h2>
            <h4>Click to Remove Attribute from Ban List</h4>
            {banned && banned.map((attribute) => (
                <li key={attribute}>
                    <button className="banned-attributes" onClick={onClick}>
                        {attribute}
                    </button>
                </li>
            ))}
        </div>
    )
}

export default BanList