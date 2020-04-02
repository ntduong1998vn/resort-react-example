import React, { useState, useEffect } from "react";

import items from "./data";
import Client from './contentful'

const RoomContext = React.createContext();

// <RoomContext.Provider value={}

function RoomProvider(props) {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  //
  const [state, setState] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  });

  // get data
  async function getData() {
    try {
      let response = await Client.getEntries({
        content_type: "resort",
        order: 'fields.price'
      });
      console.log(response)
      let rooms = formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));

      setRooms(rooms);
      setFeaturedRooms(featuredRooms);
      setSortedRooms(rooms);
      setLoading(false);
      setState({ ...state, maxPrice: maxPrice, maxSize: maxSize });
    } catch (error) {
      console.error(error);
    }
  }

  // FETCH DATA ONLINE
  useEffect(() => {
    getData();
  }, [])

  // ***************    FETCH DATA LOCAL  *******************************
  // useEffect(() => {
  //   let rooms = formatData(items);
  //   let featuredRooms = rooms.filter(room => room.featured === true);
  //   let maxPrice = Math.max(...rooms.map(item => item.price));
  //   let maxSize = Math.max(...rooms.map(item => item.size));

  //   setRooms(rooms);
  //   setFeaturedRooms(featuredRooms);
  //   setSortedRooms(rooms);
  //   setLoading(false);
  //   setState({ ...state, maxPrice: maxPrice, maxSize: maxSize });
  // }, []);

  useEffect(() => {
    filterRooms();
  }, [state])

  function formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  function getRoom(slug) {
    const selectedRoom = rooms.find(room => room.slug === slug);
    return selectedRoom;
  }

  function filterRooms() {
    let { type, capacity, price, minSize, maxSize, breakfast, pets } = state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity

    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    setSortedRooms(tempRooms);
  }

  function handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    let tempState = { ...state, [name]: value };
    setState(tempState);
  }

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        ...state,
        getRoom: getRoom,
        handleChange: handleChange
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
}

const RoomConsumer = RoomContext.Consumer;

export { RoomConsumer, RoomContext, RoomProvider };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
