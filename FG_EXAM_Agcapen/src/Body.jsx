import PropTypes from 'prop-types'
export default function Body(props){ //props-to pass information to functional components; usually arguments or parameters
    return(
        <div className="person">
            <img src="https://i5.walmartimages.com/asr/e47b09dd-60b1-49ad-b51b-3b04c3c8662c.a397465435a53bcd1a21b2bb98c174b7.jpeg" alt="keyboard-logo" className="product-picture" />
            <h1><strong>Specifications</strong></h1>
            <p>This is <strong>{props.model}'s</strong> favorite food: </p>
            <p>This is <strong>{props.layout}'s</strong> favorite food: </p>
            <p>This is <strong>{props.BL}'s</strong> favorite food: </p>
            <p>This is <strong>{props.conn}'s</strong> favorite food: </p>
            <p>This is <strong>{props.dim}'s</strong> favorite food: </p>
            <p>This is <strong>{props.weight}'s</strong> favorite food: </p>
            <p>This is <strong>{props.cLength}'s</strong> favorite food: </p>
            <p>This is <strong>{props.aFeature}'s</strong> favorite food: </p>
            <h1></h1>
            <h1>Product Description:</h1>
            <p>The KB-X1000 is a high-performance mechanical keyboard designed for gamers,
professionals, and everyday users who demand precision and comfort. It features customizable RGB
backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming
experience.
</p>

                <h3><strong>Unboxing:</strong></h3>
                    <li>Carefully remove the keyboard and accessories from the box.</li>
                    <h1></h1>
                <h3><strong>In the Box:</strong></h3>
                    <li>KB-X1000 Keyboard</li>
                    <li>USB Cable</li>
                    <li>User Manual</li>
                    <li>Keycap Removal Tool</li>
                    <li>Warranty Card</li>
                    <h1></h1>
                <h3>Key Features:</h3>
                    <p><strong>Customizable RGB Backlighting:</strong> Personalize the keyboard’s illumination with a wide range of colors and lighting effects.</p>
                    <p><strong>Mechanical Switches:</strong> Cherry MX Red switches for a responsive and smooth typing experience.</p>
                    <p><strong>Programmable Keys:</strong> Assign macros and custom functions to any key with the included software.</p>
                    <p><strong>Anti-Ghosting & N-Key Rollover:</strong> Ensure accurate keypress registration during intense gaming sessions.</p>
                    <p><strong>Dedicated Media Controls:</strong> Easily control music and videos with dedicated media keys.</p>
                    <h1></h1>
                <h3><strong>Set Up Instructions: </strong></h3>


        </div>
    )
}



Body.PropTypes = {
    model: PropTypes.string,
    layout: PropTypes.string,
    BL: PropTypes.string,
    conn: PropTypes.string,
    dim: PropTypes.string,
    weight: PropTypes.string,
   cLength: PropTypes.string,
    aFeature: PropTypes.string,
}