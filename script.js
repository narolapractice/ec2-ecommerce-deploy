fetch('/api/config')
  .then(res => res.json())
  .then(data => {
    document.getElementById('site-name').innerText = data.siteName;
  });

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Added to cart!");
  });
});