window.addEventListener("load", async () => {
  try {
    if ("serviceWorker" in navigator) {
      const reg = await navigator.serviceWorker.register("/serviceworker.js");
    }
  } catch {
    console.log("registration fail");
  }

  await loadPosts();
});

async function loadPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=17"
  );
  const data = await res.json();

  const container = document.querySelector("#posts");
  container.innerHTML = data.map(toCard).join("");
}
function toCard(post) {
  return `
      <div class="card">
        <div class="card-title">
          ${post.title}
        </div>
        <div class="card-body">
          ${post.body}
        </div>
      </div>
    `;
}
