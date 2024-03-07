'use client';
import React, {useEffect, useState} from "react";
import { Chrono } from "react-chrono";
import data from "./data";

function Timelines() {
    const [Component, setComponent] = useState(null);

  useEffect(() => {
    import('react-chrono').then((module) => {
      setComponent(module);
    });
  }, []);

  if (!Component) {
    return <div>Loading...</div>;
  }
  return (
    <section className="h-[80vh] bg-white  xl:h-[500px] lg:h-[500px] md:h-[500px] sm:h-[500px] flexCenter flex-col" >

    
      <div style={{ width: "100%", height: "50vh" }}>
        <Component.Chrono
          items={data}
        //   showAllCardsHorizontal
        // disableAutoScrollOnClick={false}
        // enableQuickJump={false}
        // enableLayoutSwitch={false}
        disableNavOnKey={false}
        // enableLayoutSwitch={false}
        // hideControls={false}
        // flipLayout={true}
        // lineWidth={10}
        timelinePointShape='circle'
        // timelinePointShape='square'
        // timelinePointShape='diamond'
//   mode="HORIZONTAL"
  mode="VERTICAL"
  buttonTexts={{
    first: 'Jump to First',
    last: 'Jump to Last',
    next: 'Next',
    previous: 'Previous',
  }}
  fontSizes={{
    cardSubtitle: '0.85rem',
    cardText: '0.8rem',
    cardTitle: '1rem',
    title: '1rem',
  }}
//   theme={{
//     primary: 'red',
//     secondary: 'blue',
//     cardBgColor: 'yellow',
//     titleColor: 'black',
//     titleColorActive: 'red',
//   }}
theme ={ {
    primary : "#253E66",
    // secondary : "#EF6555"
    }}
slideShowType="reveal"
          focusActiveItemOnLoad
          activeItemIndex={0}
          cardHeight={200}
          itemWidth={400}
          slideShow
          enableDarkToggle={true}
        //   toolbarPosition={true}
        //   borderLessCards={false}
        >
          
        </Component.Chrono>
      </div>
    </section>
  );
}
export default Timelines;