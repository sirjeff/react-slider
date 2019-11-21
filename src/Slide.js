import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.div`
  margin: 0;
  width: 90%;
  color: #333;
  padding: 1em 2em;
  height: 90%;
`;

export default class Slide extends React.Component {
 constructor() {
  super()
  this.state = {
   slides: [],
   width: 0, 
   height: 0,
  }
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
 }

 componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener("resize", this.updateWindowDimensions);
  this.getItems();
 }

 componentWillUnmount() {
  window.removeEventListener("resize", this.updateWindowDimensions);
 }

 updateWindowDimensions() {
  this.setState({ 
   width: window.innerWidth, 
   height: window.innerHeight
  });
 }

 getItems() {
  fetch(process.env.REACT_APP_DATA_FILE)
   .then(results => results.json())
   .then(results => this.setState({slides:results})
  );
 }
 
 render() {
 
  function CustomArrow(props) {
   const {onClick} = props;
   return (
    <div onClick={onClick}>
     <button className={"slick-arrow slick-"+props.direction} />
    </div>
   );
  }
  
  const SliderSettings = {
   className: "center",
   centerMode: true,
   infinite: true,
   centerPadding: "60px",
   slidesToShow: 1,
   slidesToScroll: 1,
   speed: 500,
   dots: true,
   prevArrow: <CustomArrow direction="prev" />,
   nextArrow: <CustomArrow direction="next" />,
  };
  
  const SlideLoop = this.state.slides.map((item,idx) => (
   <div 
    key={item.id} 
    className="in" 
    id={"_id"+item.id}
    >
    <div 
     className="out"
     style={{
       backgroundColor: item.backgroundcolour,
       color: item.textcolour,
       textShadow: "1px 1px 1px "+item.textshadowcolour,
       height: this.state.height-80,
     }}
     >
      <header>
       <h2>{item.description}</h2>
      </header>
     <div  
      className={this.state.height<this.state.width ? "inin portrait "+item.enlargen : "inin landscape "+item.enlargen}
      style={{
       backgroundImage: "url("+process.env.REACT_APP_IMAGES_PATH+item.imgsrc+")",
       height: this.state.height-130,
      }}
      >
     </div>
    </div>
   </div>
  ));
  
  return(
   <Container>
    <Slider {...SliderSettings}>
     {SlideLoop}
    </Slider>
   </Container>
  );
  
 }
}


