const Bandoneon = () => {
    
    
    const TeclaStyle = {
        border: "3px solid",
        borderColor: "cyan",
        fill: "#FCE0A1",
        backgroundColor: "cyan"
    }

    // style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"
    // style="fill:rgb(32,255,254);fill-opacity:0.74;fill-rule:nonzero;stroke:black;stroke-width:0.75px;"

    return (
        <svg 
            width="115px" height="115px" 
            viewBox="0 0 115 115" 
            style={TeclaStyle}
            >
            <g transform="matrix(1.0005,0.0130972,-0.0131276,1.00282,-188.735,-123.908)">
                <path 
                    d="M224.15,126.29C231.78,133.24 231.78,144.5 224.15,151.44C216.53,158.39 204.16,158.39 196.54,151.44C188.91,144.5 188.91,133.24 196.54,126.29C204.16,119.35 216.53,119.35 224.15,126.29" 
                />
            </g>
        </svg>
    );
}

export default Bandoneon;