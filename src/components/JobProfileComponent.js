import React from 'react';

const JobProfileComponent = (props) => (
    <div className="job">
        <h4><img src="/images/briefcase.svg" width="25" alt="briefcase icon" /> {/*<i className="fas fa-briefcase"></i> */} · {props.jobTitle}</h4>
        <h4><img src="/images/calendar.svg" width="25" alt="calendar icon" /> {/*<i className="far fa-calendar-alt"></i> */} · {props.dates}</h4>
        <h4><img src="/images/laptop.svg" width="25" alt="laptop icon" /> {/*<i className="fas fa-laptop"></i> */} · <a href={`https://${props.website}`} target="_blank">{props.website} <sup className="job__icon"><i className="fas fa-external-link-alt"></i></sup></a></h4>
        <h4><img src="/images/locationpin.svg" width="17" alt="location pin icon" />{/*<i className="fas fa-map-pin"></i>*/} · {props.location}</h4>
        {props.summary}
    </div>
)

export { JobProfileComponent as default };