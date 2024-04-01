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


    <section  className='bg-fixed' style={{ backgroundImage: "url('/b111.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '100%' }}>{/* <section className="h-[80vh] bg-white  xl:h-[800px] lg:h-[800px] md:h-[800px] sm:h-[800px]   flex flex-col justify-center items-center " > */}
<div className="bg-black bg-opacity-50" style={{ width: "100%", height: "100%" }}>

{/* <div className="bg-black bg-opacity-50" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}></div> */}
      <div
        initial='hidden'
        className='text-xl xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl  font-alexBrush lg:py-20 xl:py-20 md:py-20 sm:py-8 font-bold mb-0 '
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',color: 'white' }}>
        Timeline
      </div>


      <div style={{ width: "100%", height: "85%" }}>
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
            primary: "#406b3e",
            // primary: 'red',
            secondary: '#899882',
            cardBgColor: '#e2e8f0',
            titleColor: '#a5b3af',
            cardTitleColor: '#84cc16',
            titleColorActive: 'white',
            underlineColor: '#899882',
          }}
          // slideShowType="reveal"
          focusActiveItemOnLoad
          activeItemIndex={0}
          cardHeight={0}
          itemWidth={0}
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