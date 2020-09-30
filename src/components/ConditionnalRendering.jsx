import React from "react"

class TogglableImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayImage: true };
    }
    
    /* Bind est utilisé pour éviter une erreur de this non défini */
    toggleImage = () => {
        this.setState(state => ({
            displayImage: !state.displayImage
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleImage}>Show/hide the image</button>
                {/* Affichage conditionnel */}
                {this.state.displayImage && <img src={"https://picsum.photos/200/300"} alt="Lorem picsum" />}
            </div>
        );
    }
}

export default TogglableImage