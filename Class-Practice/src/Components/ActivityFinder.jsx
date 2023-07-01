import { useState, useEffect } from "react";

function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState("");

  useEffect(() => {
    console.log('useEffect ActivityFinder');
    let ignore=false;//tracker for information is true from fetch

    fetch(
      "https://www.boredapi.com/api/activity?" + "participants=" + participants
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        if (ignore===false){
        setActivity(json.activity);
        }
      });
      return()=>{
        ignore=true;
        console.log('cleanup effect');}
  }, [participants]);

  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>
  );
}
// ++ Reference http

export default ActivityFinder;
