import SectionHeader from '../SectionHeader';
import EventBox from './EventBox';
const getEvents = async () => {
    const res = await fetch('http://localhost:4002/events');
    return res.json();
};

const Events = async () => {
    const events = await getEvents();
    // console.log(events);

    return (
        <section style={{ backgroundImage: "url('/b5.jpg')" }} className="section" id="tours">
            <div className="container mx-auto">
                <SectionHeader pretitle='AAPL' title='Upcoming Events'/>
                {/* events box */}
                <EventBox events={events} />
            </div>
        </section>
    );
}


export default Events;