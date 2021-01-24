//importing the backend server api url from the config file
import { API } from "../config";

//method to save the data in the database
export const signup = async (user) => {
  // console.log(user);
  try {
    const response = await fetch(`${API}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

//method to fetch all the data from the database
export const getUserData = async () => {
    try {
      const response = await fetch(`${API}/allData`, {
        method: "GET"
      });
      return response.json();
    } catch (err) {
      return console.log(err);
    }
  };