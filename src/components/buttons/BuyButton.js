import "../../styles/components-style/buttons.css"


const BuyButton = () => {
    return (
        <button style={{ backgroundColor:"#FEDE44" }} className="button-card">
            <img className="logo-button" src={require('../../images/logos/bank.png')} alt="bank"/>
            <p className="buttonText"> Acheter</p>
        </button>
    )
}

export default BuyButton