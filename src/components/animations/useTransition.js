import React, { useEffect } from 'react';
const useTransition = () => {
    // useEffect(() => {
    //     // start()
    //     setTimeout(() => {
    //         end()
    //     }, 1000);
    // }, []);
    const animationIndex = Math.floor(Math.random() * 5);
    console.log(animationIndex);
    const ttb = (layers, type) => {
        layers.forEach((layer, i) => {
            if (type === "end") {
                layer.style.transform = 'scaleX(1) scaleY(0)';
                layer.style.transitionDuration = '.4s'
                // layer.style.opacity = 0;
            } else if (type === "start") {
                layer.style.transform = 'scaleX(1) scaleY(1)';
                layer.style.transformOrigin = "top left";
                layer.style.opacity = 1;
                layer.style.transitionDuration = '.2s'
                layer.style.transitionDelay = `${i * 10}ms`;

            }
        })
    }
    const btt = (layers, type) => {
        layers.forEach((layer, i) => {
            if (type === "end") {
                layer.style.transform = 'scaleX(1) scaleY(0)';
                layer.style.transitionDuration = '.4s'
                // layer.style.opacity = 0;
            } else if (type === "start") {
                layer.style.transform = 'scaleX(1) scaleY(1)';
                layer.style.transformOrigin = "bottom left";
                layer.style.opacity = 1;
                layer.style.transitionDuration = '.2s'
                layer.style.transitionDelay = `${i * 10}ms`;
            }
        })
    }

    const ltr = (layers, type) => {
        layers.forEach((layer, i) => {
            if (type === "end") {
                layer.style.transform = 'scaleX(0) scaleY(1)';
                layer.style.transitionDuration = '.4s'
                // layer.style.opacity = 0;
            } else if (type === "start") {
                layer.style.transform = 'scaleX(1) scaleY(1)';
                layer.style.transformOrigin = "top left";
                layer.style.opacity = 1;
                layer.style.transitionDuration = '.2s'
                layer.style.transitionDelay = `${i * 10}ms`;
            }
        })
    }
    const rtl = (layers, type) => {
        layers.forEach((layer, i) => {
            if (type === "end") {
                layer.style.transform = 'scaleX(0) scaleY(1)';
                layer.style.transitionDuration = '.4s'
                // layer.style.opacity = 0;
            } else if (type === "start") {
                layer.style.transform = 'scaleX(1) scaleY(1)';
                layer.style.transformOrigin = "top right";
                layer.style.opacity = 1;
                layer.style.transitionDuration = '.2s'
                layer.style.transitionDelay = `${i * 10}ms`;
            }
        })
    }
    const mto = (layers, type) => {
        layers.forEach((layer, i) => {
            if (type === "end") {
                layer.style.transform = 'scaleX(0) scaleY(1)';
                layer.style.transitionDuration = '.4s'
                // layer.style.opacity = 0;
            } else if (type === "start") {
                layer.style.transform = 'scaleX(1) scaleY(1)';
                layer.style.transformOrigin = "top center";
                layer.style.opacity = 1;
                layer.style.transitionDuration = '.2s'
                layer.style.transitionDelay = `${i * 10}ms`;
            }
        })
    }

    const animation = [ttb, btt, ltr, rtl, mto];
    const reveal = () => {
        const layersElement = document.getElementById("dvlprAlamin");
        if (layersElement) {
            const layers = layersElement.querySelectorAll(".layer");
            const animate = animation[animationIndex]
            animate(layers, "start")
        }
    }
    const close = () => {
        const layersElement = document.getElementById("dvlprAlamin");
        if (layersElement) {
            const layers = layersElement.querySelectorAll(".layer");
            const animate = animation[animationIndex]
            animate(layers, "end")
        }
    }

    const start = () => reveal();
    const end = () => close();


    return {
        start,
        end
    }
};

export default useTransition;