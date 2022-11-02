
import React from 'react'

export default function contentScript() {
  return (
    <div>contentScript</div>
  )
}

// console.log("ContentScript is running");
// function handleClick(ev) {
//     console.log(ev.target, "was clicked");
//     // chrome.runtime.sendMessage("DOM element was clicked", (response) => {
//     //     console.log(response);
//     // })
// }

// window.onload = () => {
//     console.log("Document loaded");
//     document.body.addEventListener('click', handleClick);
// }
// // console.log("Document loaded");
// // document.body.addEventListener('click', handleClick);

// const newEl = document.createElement('div');
// newEl.id = "my-extension";
// document.body.appendChild(newEl);