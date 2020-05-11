import React, { Component, useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

let images = [
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2019-05-31_08-39-38_585.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2019-06-16_13-56-58_054.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2019-06-16_15-17-44_171.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2019-06-18_17-29-56_078.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2019-06-18_18-28-00_790.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2019-06-30_14-37-43_580.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2019-12-07_16-18-40_626.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2019-12-14_14-57-06_959.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2020-01-11_10-24-33_748.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2020-01-11_14-30-24_122.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2020-01-20_16-02-47_971.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2020-01-22_13-57-19_121.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2020-01-23_12-17-46_990.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2020-01-23_15-35-37_219.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2020-02-01_16-02-56_447.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2020-02-01_16-05-00_018.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/2020-02-01_16-41-03_974.jpg/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/IMG_0855.JPG/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/IMG_0856.JPG/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/IMG_0857.JPG/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/IMG_0858.JPG/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/IMG_0859.JPG/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/IMG_0860.JPG/:/rs=w:1300,h:800",
    "//img1.wsimg.com/isteam/ip/337f7a93-d6a1-441f-b9c8-af063a08ba5a/IMG_0861.JPG/:/rs=w:1300,h:800",
]

export const PhotoCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = images.map((image) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={image}
            >
                <img src={image} />
            </CarouselItem>
        );
    });

    return (
        <>
            <style>
                {
                    `
                    .carousel-item {
                    }
                    .carousel-inner img {
                        margin: 0 auto;
                        height: 950px;
                    }
                    `
                }
            </style>
            <div className="row">
                <div className="col-md-12">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        ride="carousel"
                    >
                        {slides}
                    </Carousel>
                </div>
            </div>
        </>
    )

}