var article = document.querySelector(".article-one");
var description = document.querySelector(".flavors-article-info-one");

function appear() {
  article.classList.toggle("is-visible");
  description.classList.toggle("is-visible");
}

article.addEventListener("click", appear);
