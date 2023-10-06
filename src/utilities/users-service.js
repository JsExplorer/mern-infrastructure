import * as usersAPI from "./users-api";

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);
  // Baby step by returning whatever is sent back by the server
  localStorage.setItem("token", token);
  return getUser();
}

export async function logIn(userData) {
  const token = await usersAPI.logIn(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem("token");
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export async function checkToken() {
    // Just so that you don't forget how to use .then
    return (
      usersAPI
        .checkToken()
        // checkToken returns a string, but let's
        // make it a Date object for more flexibility
        .then((dateStr) => new Date(dateStr))
    );
}

// export async function checkToken() {
//   const token = localStorage.getItem("token");
//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };

//   try {
//     const response = await fetch("/api/users/check-token", { headers });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error("Error checking token: " + error.message);
//   }
// }


export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  localStorage.removeItem("token");
}

export async function getNotes() {
  const notesData = await usersAPI.fetchNotes();
  console.log(notesData);
  return notesData;
}

export async function addNote() {
  const notes = await usersAPI.addNewNote();
  return notes;
}