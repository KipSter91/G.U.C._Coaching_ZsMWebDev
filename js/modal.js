// This module handles the creation and functionality of a modal for displaying service information
import { translations } from "./translations.js";

// Helper function to get the current language from the <select>
const getCurrentLang = () =>
  document.getElementById("languageSelect")?.value || "en";

// Function to create the modal element and append it to the DOM
export function createServiceModal() {
  const modal = document.createElement("div");
  modal.id = "serviceModal";
  modal.className =
    "fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 hidden";

  // Set the modal's inner HTML
  modal.innerHTML = `
    <div class="bg-gray-900 text-white rounded-xl p-6 max-w-2xl w-full mx-4 border border-pink-600 shadow-xl relative animate-fade-in-up">
      <button id="closeModal" class="absolute top-2 right-2 text-pink-500 text-2xl font-bold hover:text-pink-400">&times;</button>
      <h2 class="text-2xl font-bold text-pink-500 mb-4 text-center" id="modalTitle">Title</h2>
      <p class="text-gray-300 text-sm leading-relaxed" id="modalDescription">Description</p>
    </div>
  `;
  //Later for the images in the innerHTML
  // <img src="" alt="" id="modalImage" class="mb-4 rounded-lg shadow max-h-48 object-cover w-full" />
  
  // Add the modal to the page
  document.body.appendChild(modal);

  // Add close functionality to the modal
  document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

// Function to open the modal with translated content based on selected language
export function openServiceModal(data) {
  const modal = document.getElementById("serviceModal");
  if (!modal || !data?.key) return;

  const lang = getCurrentLang();
  const key = data.key;

  const title = translations[lang][key];
  const description = translations[lang][`${key}ModalText`];

  const titleEl = document.getElementById("modalTitle");
  const descEl = document.getElementById("modalDescription");
  //Later for the images in the modal
  // const imageEl = document.getElementById("modalImage");

  // Apply content
  titleEl.textContent = title || `[Missing: ${key}]`;
  descEl.textContent = description || `[Missing: ${key}Text]`;
  //Later for the images in the modal
  // imageEl.src = data.image || "";

  // Optional: set i18n attributes for future language switching
  // titleEl.setAttribute("data-i18n", key);
  // descEl.setAttribute("data-i18n", `${key}Text`);

  // Show modal
  modal.classList.remove("hidden");

  // Store current modal data globally for retranslation support
  window.currentServiceModal = data;
}

//Later for the images in the innerHTML
// <img src="" alt="" id="modalImage" class="mb-4 rounded-lg shadow max-h-48 object-cover w-full" />