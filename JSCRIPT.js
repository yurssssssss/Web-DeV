let stars = document.querySelectorAll('.star');
let rating = 0;

// --- STAR RATING LOGIC ---
stars.forEach(star => {
  star.addEventListener('click', function() {
    rating = this.dataset.value;

    stars.forEach(s => s.classList.remove('active'));
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add('active');
    }
  });
});

/* RATING SUBMIT */
document.getElementById("rateSubmit").addEventListener("click", () => {


const ratecategorySelect = document.querySelector("#rateProductForm .category-select-class");
const ratesuppliesSelect = document.querySelector("#rateProductForm .supplies-select-class");

  if (ratecategorySelect.value === "" || ratesuppliesSelect.value === "") {
    alert("Please select category and supplies before submitting.");
    return;
  }
  if (rating === 0) {
    alert("Please select a star rating before submitting.");
    return;
  }
 
  
  let popup = document.getElementById("popup");
  popup.style.display = "block";

  setTimeout(() => popup.style.display = "none", 3000);
  

  stars.forEach(s => s.classList.remove('active'));
  rating = 0; 
});


document.getElementById("feedbackSubmit").addEventListener("click", () => {

  const feedbackTextarea = document.getElementById("feedbackTextarea");
  const feedbackCategorySelect = document.querySelector("#feedbackForm .category-select-class");
  const feedbackSuppliesSelect = document.querySelector("#feedbackForm .supplies-select-class");

  if (feedbackTextarea.value.trim() === "") {
    alert("Please enter your feedback before submitting.");
    return;
  }
  if (feedbackCategorySelect.value === "" || feedbackSuppliesSelect.value === "") {
    alert("Please select category and supplies before submitting.");
    return;
  }

  let popup2 = document.getElementById("popup2");
  popup2.style.display = "block";
  feedbackTextarea.value = '';
  feedbackCategorySelect.value = ''; 
  feedbackSuppliesSelect.innerHTML = '<option value="" disabled selected>Select Supplies</option>';
  setTimeout(() => popup2.style.display = "none", 3000);
  

});


const suppliesData = {
  school: ["Bond Paper", "Notebook", "Pencil", "Crayons", "Eraser"],
  office: ["Marker", "Stapler", "Folder", "Ballpen", "Paper Clips"],
  art: ["Paint Brush", "Acrylic Paint", "Canvas", "Color Palette"],
  tech: ["Usb Cable", "Calculator", "Usb", "Keyboard", "Mouse"] 
};

const categorySelectors = document.querySelectorAll(".category-select-class");

categorySelectors.forEach(selector => {
  selector.addEventListener("change", function() {
    const category = this.value; 

    const container = this.closest('.panel'); 
    
   
    const suppliesSelect = container.querySelector('.supplies-select-class');

    if (!suppliesSelect) {
      console.error("Could not find the supplies select dropdown in this panel.");
      return;
    }

    // Clear old options
    suppliesSelect.innerHTML = '<option value="" disabled selected>Select Supplies</option>';

    if (suppliesData[category]) {
      // Add new items
      suppliesData[category].forEach(item => {
        let option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        suppliesSelect.appendChild(option);
      });
    }
  });
});