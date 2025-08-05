import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css";
import { callComments } from "./API";

export type commentType = {
  id: string,
  body: string,
}

// variable to recall API
export const API_URL = "https://jsonplaceholder.typicode.com/comments";

// variables to link to divs in HTML
export const commentContainer = document.querySelector(".container") as HTMLDivElement;
export const deleteButton = document.getElementById("deleteBtn") as HTMLDivElement;

export default deleteButton.addEventListener("click", async () => {
  const comments = commentContainer.querySelectorAll(".comment");

  if (comments.length === 0) {
    console.log("No comments to delete.");
    return;
  }
  // This will call the last comment on the DOM
  const lastComment = comments[comments.length - 1];
  const lastId = lastComment.getAttribute("data-id");

  // This will delete the comment from the API
  const res = await fetch(`${API_URL}/${lastId}`, { method: "DELETE" });
  const result = await res.json();
  console.log("Server responded to DELETE:", result);

  // This will remove from DOM
  lastComment.remove();
});

callComments();