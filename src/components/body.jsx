/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const plan = createContext(null);
const switchPlan = createContext(null);

function Body() {
  const [bool, setBool] = useState(false);

  return (
    <plan.Provider value={bool}>
      <switchPlan.Provider value={setBool}>
        <Toggle />
      </switchPlan.Provider>
      <Cards />
    </plan.Provider>
  );
}

function Toggle() {
  const bool = useContext(plan);
  const setBool = useContext(switchPlan);

  return (
    <div className="toggle">
      <p>Annually</p>
      <button onClick={() => setBool(!bool)} data-checked={bool}>
        <div></div>
      </button>
      <p>Monthly</p>
    </div>
  );
}

function Cards() {
  const cardDetails = [
    {
      title: "Basic",
      price: {
        annually: "$199.99",
        monthly: "$19.99",
      },
      storage: "500 GB Storage",
      users: "2 Users Allowed",
      send: "Send up to 3 GB",
    },
    {
      title: "Professional",
      price: {
        annually: "$249.99",
        monthly: "$24.99",
      },
      storage: "1 TB Storage",
      users: "5 Users Allowed",
      send: "Send up to 10 GB",
    },
    {
      title: "Master",
      price: {
        annually: "$399.99",
        monthly: "$39.99",
      },
      storage: "2 TB Storage",
      users: "10 Users Allowed",
      send: "Send up to 20 GB",
    },
  ];

  return (
    <div className="cards">
      {cardDetails.map(item => (
        <Card details={item} key={item.title} />
      ))}
    </div>
  );
}

function Card({ details }) {
  const bool = useContext(plan);

  return (
    <div className="card">
      <h2>{details.title}</h2>
      <p>{!bool ? details.price.annually : details.price.monthly}</p>
      <p>{details.storage}</p>
      <p>{details.users}</p>
      <p>{details.send}</p>
      <button>Learn More</button>
    </div>
  );
}

export default Body;
