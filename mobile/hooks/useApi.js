import React from "react";
import Constants from "expo-constants";

const apiKey = Constants.expoConfig.extra.env.API_URL;

export default function useApi() {
  return apiKey;
}
