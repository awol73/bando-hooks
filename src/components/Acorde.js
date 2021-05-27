const Acorde = ({keyState, setKeyState}) => {
    

    //width="100%" height="100%" viewBox="0 0 40 37" 

    const tecla = (on) => <path d="M224.15,126.29C231.78,133.24 231.78,144.5 224.15,151.44C216.53,158.39 204.16,158.39 196.54,151.44C188.91,144.5 188.91,133.24 196.54,126.29C204.16,119.35 216.53,119.35 224.15,126.29" 
    style={{fill: on ? ("#818CEF"): ("#D5D6DE"),fillOpacity:"0.74",fillRule:"nonzero",stroke:"black",strokeWidth:"0.50px"}}/>;

    const tecla2 = (on) => <path d="M224.15,126.29C231.78,133.24 231.78,144.5 224.15,151.44C216.53,158.39 204.16,158.39 196.54,151.44C188.91,144.5 188.91,133.24 196.54,126.29C204.16,119.35 216.53,119.35 224.15,126.29" 
    style={{fill:"#FCE0A1",fillOpacity:"0.74",fillRule:"nonzero",stroke:"green",strokeWidth: on}}/>;


    return (
        <svg width="120px" height="160px" 
        viewBox="0 0 30 53" >
            <g transform="matrix(0.253424,0.0033175,-0.0035976,0.274821,-47.3344,-33.892)">
                {tecla(keyState.ki1)}
            </g>
            <g transform="matrix(0.253424,0.0033175,-0.0035976,0.274821,-36.8577,-23.4923)">
                {tecla(keyState.ki2)}
            </g>
            <g transform="matrix(0.253424,0.0033175,-0.0035976,0.274821,-47.2576,-17.7848)">
                {tecla(keyState.ki3)}
            </g>
            <g transform="matrix(0.253424,0.0033175,-0.0035976,0.274821,-33.078,-9.64314)">
                {tecla(keyState.ki4)}
            </g>
        </svg>
    );
}

export default Acorde;