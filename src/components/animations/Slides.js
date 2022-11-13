
const Layer = ({ layers, index }) => {
    return (
        <div className='layer'
            style={{
                position: "fixed",
                top: `${(100 / layers) * index}vh`,
                left: "0%",
                width: "100vw",
                // maxWidth: "100%",
                height: `${(100 / layers) + .1}vh`,
                borderBottom: "1px solid white",
                borderTop: "1px solid white",
                backgroundColor: 'rgb(38, 110, 246)',// index % 2 === 0 ? "rgb(38, 110, 246)" : "rgb(110, 50, 56)", //`hsl(${(360 / layers) * index}, 100%, 50%)`,
                opacity: 0,
                pointerEvents: 'none',
                boxSizing: "content-box",
                zIndex: 99999,
                transform: "scaleX(1) scaleY(1)",
                transitionDuration: ".4s",
                transitionTimingFunction: "ease-in-out",
                transitionDelay: `${index * 20}ms`,
                transformOrigin: "bottom left"
            }}>
        </div>
    )
}

const Slides = ({ layers = 30 }) => {
    console.log("route.shallow = true");
    return (
        <div id='dvlprAlamin'>
            {
                [...new Array(layers)].map((_e, i) => <Layer key={i} layers={layers} index={i} />)
            }
        </div>
    )
}

export default Slides;