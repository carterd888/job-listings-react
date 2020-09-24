import React from "react";
import data from "./data.json";


function DisplayJobs () {
    console.log({ data });
    return (
      <div className="container">
        {data.map((job) => (
          <div className="card">
            <img src={job.logo} className="logos" alt="company logo"></img>
            <p>{job.company}</p>
            <h3>{job.position}</h3>
            <p>
              {job.postedAt},    
              {job.contract},
              {job.location}
            </p>
          </div>
        ))}
      </div>
    );
}

export default DisplayJobs;