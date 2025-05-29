const btnToggleCategory = document.querySelector(".btn-category");
const modalCategory = document.getElementById("modal");

btnToggleCategory.addEventListener("click", () => {
  modalCategory.style.display = modalCategory.style.display === "block" ? "none" : "block"
})

document.addEventListener("DOMContentLoaded", () => {
  const categoriesContainer = document.querySelector(".categories-content");
  const scrollLeftBtn = document.querySelector(".scroll-left");
  const scrollRightBtn = document.querySelector(".scroll-right");

  fetch("http://localhost:8000/categories")
    .then((response) => response.json())
    .then((categories) => {
      categories.forEach((category) => {
        const categoriesElement = document.createElement("div");
        categoriesElement.classList.add("categoriesList");
        categoriesElement.innerHTML = `
                <div class="image-container">
                    <img src="${category.image}" alt="${category.title}" />
                </div>
                <div class="titleDescription">
                    <h2>${category.title}</h2>
                </div>
                `;
        categoriesContainer.appendChild(categoriesElement);
      });
    });
    const scrollAmount = 1160;

    scrollLeftBtn.addEventListener("click", () => {
        categoriesContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    })

    scrollRightBtn.addEventListener("click", () => {
        categoriesContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    })
});

document.addEventListener("DOMContentLoaded", () => {
  const amazonContainer = document.querySelector(".amazon-content");

  fetch("http://localhost:8000/products-amazon")
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => {
        const amazonElement = document.createElement("div");
        amazonElement.classList.add("amazonList");
        amazonElement.innerHTML = `
                <div class="image-amazon">
                    <img src="${product.image}" alt="${product.title}" />
                </div>
                `;
        amazonContainer.appendChild(amazonElement);
      });
    });
});
