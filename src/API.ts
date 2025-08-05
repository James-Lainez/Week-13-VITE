import type { commentType } from "./main";
import { addCommentsToDOM } from "./addToDom";
import { API_URL } from "./main";

//Fetch API
export async function callComments() {
  const res = await fetch(`${API_URL}?_limit=6`);
  const comments = await res.json();
  console.log(comments);
  comments.forEach((comment: commentType) => addCommentsToDOM(comment));
}



