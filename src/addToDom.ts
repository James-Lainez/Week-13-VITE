import type { commentType } from "./main";

  
const commentContainer = document.querySelector(".container") as HTMLDivElement;

  // Add API to container
  export function addCommentsToDOM(comment: commentType) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.setAttribute("data-id", comment.id);
    commentDiv.innerHTML = `
      <text id="idNum">${comment.id}.</text>
      <text>${comment.body}</text>
    `;

    commentContainer.appendChild(commentDiv);
  }
  