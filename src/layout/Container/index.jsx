import React from "react";

import "../../styles/ContainerStyles/styles.css";

const Container = (props) => {
    return (
        <div className="container">
            { props.children }
        </div>
    );
}

export default Container;
