import React, { useEffect, useState } from "react";



const StartPageBackground = () => {
  const [state, setState] = useState({
    countImg: 0,
    images: [

      "url('/backgroundImages/carouselPic1.jpg')",
      "url('/backgroundImages/carouselPic2.jpg')",
      "url('/backgroundImages/carouselPic3.jpg')",
      "url('/backgroundImages/carouselPic4.jpg')",
      "url('/backgroundImages/carouselPic5.jpg')"

    ],
  }

  );

  useEffect(() => {
    const interval = setInterval(() => {

      setState({
        selectedImage: state.images[state.countImg]
      })
      console.log(state.images)

      setState(state => {
        console.log(state.countImg)
        return {
          count: state.countImg++,
        };
      });

      if (state.countImg === 6) {
        setState({
          countImg: 0
        });
      }

    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // useEffect(() => {
  //   setInterval();
  // }, [])
  // componentDidMount() {
  //     setInterval(() => {

  //         this.setState({
  //             selectedImage: this.state.images[this.state.countImg]
  //         })

  //         this.setState(prev => {
  //             return {
  //                 count: prev.countImg++,
  //             };
  //         });

  //         if (this.state.countImg === 5) {
  //             this.setState({
  //                 countImg: 0
  //             });
  //         }

  //     }, 5000);
  // };


  return (
    <div className="homePageBackgroundShow" style={{ backgroundImage: state.selectedImage }} alt="Bakgrundsbilder som skiftar var femte sekund">

    </div>
  );
}


export default StartPageBackground;