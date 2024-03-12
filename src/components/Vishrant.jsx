'use client';
import React, { useEffect, useState } from "react";
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


    <section className="h-[80vh] bg-white  xl:h-[1000px] lg:h-[1000px] md:h-[1000px] sm:h-[750px]  bg-newsletter bg-fixed bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center " >
    {/* <section className="h-[80vh] bg-white  xl:h-[800px] lg:h-[800px] md:h-[800px] sm:h-[800px]   flex flex-col justify-center items-center " > */}
<div className="bg-black bg-opacity-50" style={{ width: "100%", height: "100%" }}>

{/* <div className="bg-black bg-opacity-50" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}></div> */}
      <div
        initial='hidden'
        className='text-xl xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl  font-alexBrush py-20 font-bold mb-0'
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        Timeline
      </div>


      <div style={{ width: "100%", height: "70%" }}>
        <Component.Chrono
        
          items={data}
          // enableOutline 
          hideControls={false}
          allowDynamicUpdate
          // textDensity='HIGH'
          useReadMore={false}
          //   showAllCardsHorizontal
          // enableChangeDesity={false}
          enableQuickJump={false}
          enableLayoutSwitch={false}
          disableNavOnKey={false}
          // cardHeight={10}
          // enableLayoutSwitch={false}
          // hideControls={false}
          // flipLayout={true}
          // lineWidth={10}
          // timelinePointShape='circle'
          // timelinePointShape='square'
          // timelinePointShape='diamond'
            // mode="HORIZONTAL"
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
          theme={{
            primary: "#253E66",
            // primary: 'red',
            secondary: 'blue-200',
            cardBgColor: '#e2e8f0',
            titleColor: 'black',
            cardTitleColor: '#84cc16',
            titleColorActive: 'white',
          }}
          // slideShowType="reveal"
          focusActiveItemOnLoad
          activeItemIndex={0}
          cardHeight={100}
          itemWidth={400}
          // slideShow
          enableDarkToggle={false}
          //   toolbarPosition={true}
          //   borderLessCards={false}
          >

        </Component.Chrono>
      </div>
          </div>
    </section>
  );
}
export default Timelines;