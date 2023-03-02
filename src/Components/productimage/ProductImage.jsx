import React from "react";
import photo1 from "../../Photos/Access Control System.jpg";
import photo2 from "../../Photos/CCTV.jpg";
import photo3 from "../../Photos/Fire Alarm System.jpg";
import photo4 from "../../Photos/Fire Extinguishers.jpg";
import photo5 from "../../Photos/Fire Hydrant System.jpg";
import photo6 from "../../Photos/Fire Suppression System.jpg";
import photo7 from "../../Photos/PA System1.jpg";
import photo8 from "../../Photos/Rodent Repellent System.jpg";
import photo9 from "../../Photos/VESDA System.jpg";
import photo10 from "../../Photos/Water Leak Detection.jpg";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./ProductImage.css";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const ProductImage = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={photo1} alt="Access Control Sysytem" />

        <Carousel.Caption>
          <div>
            <span>
              <h3>Access Control Sysytem </h3>
              <Button
                variant="dark"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Our Services"}
              </Button>
            </span>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo2} alt="CCTV" />

        <Carousel.Caption>
        <div>
            <span>
              <h3>CCTV</h3>
              <Button
                variant="dark"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Our Services"}
              </Button>
            </span>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <img className="d-block w-100" src={photo3} alt="Fire Alarm System" />

        <Carousel.Caption>
            <span>
          <h3>Fire Alarm System</h3>
          <Button
                variant="dark"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Our Services"}
              </Button>
            </span>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo4} alt="Fire Extinguishers System" />
        <Carousel.Caption>
        <span>
          <h3>Fire Extinguishers </h3>
          <Button
                variant="dark"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Our Services"}
              </Button>
            </span>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo5} alt="Fire Hydrant System" />
        <Carousel.Caption>
        <span>
          <h3>Fire Hydrant System</h3>
          <Button
                variant="dark"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Our Services"}
              </Button>
            </span>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo6} alt="First Suppression System" />
        <Carousel.Caption>
        <span>
          <h3>Fire Suppression System</h3>
          <Button
                variant="dark"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Our Services"}
              </Button>
            </span>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo7} alt="PA System" />
        <Carousel.Caption>
        <span>
          <h3>PA System</h3>
          <Button
                variant="dark"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Our Services"}
              </Button>
            </span>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo8} alt="Rodent Repellent System" />
        <Carousel.Caption>
        <span>
          <h3>Rodent Repellent System</h3>
          <Button
                variant="dark"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Our Services"}
              </Button>
            </span>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo9} alt="VESDA System" />
        <Carousel.Caption>
        <span>
          <h3>VESDA System</h3>
          <Button
                variant="dark"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Our Services"}
              </Button>
            </span>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo10} alt="Water Leak Detection" />
        <Carousel.Caption>
        <span>
          <h3>Water Leak Detection</h3>
          <Button
                variant="dark"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Our Services"}
              </Button>
            </span>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductImage;
