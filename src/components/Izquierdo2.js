
const Izquierdo2 = ({keyState, stCerrar}) => {
    
    const elipse = (on) => { 

            let colorKey= "#a39b9f";
            
            stCerrar.cerrando ? (colorKey= "#d96fa7") : (colorKey= "#03a9fc"); 
            
            return <ellipse 
                            cx="49.97" 
                            cy="40.725" 
                            rx="20.359" 
                            ry="18.859" 
                            style={{
                                fill: on ? colorKey : ("#D5D6DE"),
                                stroke:"#ff0046",
                                strokeWidth:"1.41px"
                            }}
                    />
            };

    return (
        // <div style={{borderStyle: "solid"}}>
            <svg width="224px" height="474px"  viewBox="0 0 224 474" style={{display: "block",margin:"auto", borderStyle: "solid"}}>
            <g id="Layer1">
                <g transform="matrix(0.908672,0,0,0.980962,5.17751,-0.365784)">
                    {elipse(keyState.["k0/0"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,131.253,46.5878)">
                    {elipse(keyState.["k15"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,46.4116,-20.6827)">
                    {elipse(keyState.["k6/0"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,62.2668,24.2522)">
                    {elipse(keyState.["k2/0"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,106.771,0.379848)">
                    {elipse(keyState.["k16"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,149.36,-20.2526)">
                    {elipse(keyState.["k*"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,20.8418,42.5353)">
                    {elipse(keyState.["k+"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,-12.1842,74.3156)">
                    {elipse(keyState.["k⌖"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,88.0305,65.4741)">
                    {elipse(keyState.["k3/0"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,45.3265,87.0671)">
                    {elipse(keyState.["k0"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,6.1929,115.134)">
                    {elipse(keyState.["k4/0"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,78.5162,132.132)">
                    {elipse(keyState.["k9"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,76.8461,193.559)">
                    {elipse(keyState.["k8"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,78.5913,261.161)">
                    {elipse(keyState.["k7"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,-25.6181,220.483)">
                    {elipse(keyState.["k3/3"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,129.792,302.357)">
                    {elipse(keyState.["k11"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,52.2546,351.663)">
                    {elipse(keyState.["k1"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,157.386,413.733)">
                    {elipse(keyState.["k5/0"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,-23.6937,147.928)">
                    {elipse(keyState.["k4/4"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,3.51903,184.246)">
                    {elipse(keyState.["k3/4"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,36.999,151.34)">
                    {elipse(keyState.["k4"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,115.889,174.375)">
                    {elipse(keyState.["k13"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,118.68,107.805)">
                    {elipse(keyState.["k14"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,116.632,236.719)">
                    {elipse(keyState.["k12"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,4.64727,256.296)">
                    {elipse(keyState.["k2/3"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,39.183,286.497)">
                    {elipse(keyState.["k2"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,-20.0889,295.122)">
                    {elipse(keyState.["k2/2"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,14.3697,326.423)">
                    {elipse(keyState.["k1/2"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,93.4172,327.203)">
                    {elipse(keyState.["k6"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,28.5703,389.147)">
                    {elipse(keyState.["k1/1"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,105.225,387.105)">
                    {elipse(keyState.["k5"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,146.625,366.598)">
                    {elipse(keyState.["k10"])}
                </g>
                <g transform="matrix(0.908672,0,0,0.980962,36.624,218.603)">
                    {elipse(keyState.["k3"])}
                </g>
            </g>
        </svg>
        //</div>
    );
}

export default Izquierdo2;