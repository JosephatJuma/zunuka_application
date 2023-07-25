import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import useApi from "./useApi";
import { fetch } from "../state/trips/tripsSlice";
const useFetchTrips = () => {
  const [errMsg, setErr] = React.useState("");
  const dispatch = useDispatch();
  const API_URL = useApi();
  const fetchTrips = async () => {
    try {
      const response = await axios.get(`${API_URL}trips`);
      dispatch(fetch(response.data.trips));
    } catch (error) {
      setErr(error.message);
    }
  };
  return { fetchTrips, errMsg };
};

export default useFetchTrips;
