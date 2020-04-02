import React, { useState } from "react";

import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default function Service() {
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: "free cooktails",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis placeat eos minima, ipsa exercitationem ipsum dolor rerum hic omnis reprehenderit, in voluptatem, nostrum quidem explicabo dignissimos! Corporis, laudantium expedita."
    },
    {
      icon: <FaHiking />,
      title: "fahiking cooktails",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis placeat eos minima, ipsa exercitationem ipsum dolor rerum hic omnis reprehenderit, in voluptatem, nostrum quidem explicabo dignissimos! Corporis, laudantium expedita."
    },
    {
      icon: <FaShuttleVan />,
      title: "fashuttle cooktails",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis placeat eos minima, ipsa exercitationem ipsum dolor rerum hic omnis reprehenderit, in voluptatem, nostrum quidem explicabo dignissimos! Corporis, laudantium expedita."
    },
    {
      icon: <FaBeer />,
      title: "fabeer cooktails",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis placeat eos minima, ipsa exercitationem ipsum dolor rerum hic omnis reprehenderit, in voluptatem, nostrum quidem explicabo dignissimos! Corporis, laudantium expedita."
    }
  ]);
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
