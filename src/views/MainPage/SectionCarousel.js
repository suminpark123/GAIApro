import Carousel from "react-bootstrap/Carousel";

function SectionCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item >
        <img style={{width:"60%", display:"flex",textAlign:"center",margin:"auto",height:"600px"}}
          className="w-80"
          src={require("assets/img/환경오염.jpg")}
          alt="First slide"
        />
        <Carousel.Caption style={{marginBottom:"220px",fontSize:"30px"}}>
          <h3>해양오염</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"60%", display:"flex",textAlign:"center",margin:"auto",height:"600px"}}
          className=" w-80"
          src={require("assets/img/플라스틱쓰레기.jpg")}
          alt="Second slide"
        />
        <Carousel.Caption style={{marginBottom:"220px",fontSize:"30px"}}>
          <h3>플라스틱 산</h3> 
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"60%", display:"flex",textAlign:"center",margin:"auto",height:"600px"}}
          className=" w-80"
          src={require("assets/img/trash.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption style={{marginBottom:"220px",fontSize:"30px"}}>
        <h3>사진 구하고</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default SectionCarousel;
