import React from "react";
import { Carousel } from "react-bootstrap";

const HeroSlider = () => {
  return (
    <>
      <Carousel className="mx-auto sm:mt-[-225px] mt-[-330px] justify-center sm:max-w-[1140px] p-6">
        <Carousel.Item interval={800}>
          <img
            className="d-block w-full object-cover h-[400px] sm:h-[50vh]"
            src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Sun Meditation!</h3>
            <p>for Chakras alignment.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-full object-cover h-[400px] sm:h-[50vh]"
            src="https://images.pexels.com/photos/5704127/pexels-photo-5704127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Moon Meditation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-full object-cover h-[400px] sm:h-[50vh]"
            src="https://images.pexels.com/photos/5876816/pexels-photo-5876816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Earth Meditation</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeroSlider;
