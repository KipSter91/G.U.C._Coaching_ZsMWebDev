export function createServiceModal() {
    const modal = document.createElement("div");
    modal.id = "serviceModal";
    modal.className =
        "fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 hidden";

    modal.innerHTML = `
      <div class="bg-gray-900 text-white rounded-xl p-6 max-w-2xl w-full mx-4 border border-pink-600 shadow-xl relative animate-fade-in-up">
        <button id="closeModal" class="absolute top-2 right-2 text-pink-500 text-2xl font-bold hover:text-pink-400">&times;</button>
        <h2 class="text-2xl font-bold text-pink-500 mb-4" id="modalTitle">Service Title</h2>
        <img src="" alt="" id="modalImage" class="mb-4 rounded-lg shadow max-h-48 object-cover w-full" />
        <p id="modalDescription" class="text-gray-300 text-sm leading-relaxed">Service description goes here.</p>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("closeModal").addEventListener("click", () => {
        modal.classList.add("hidden");
    });
}

export function openServiceModal(data) {
    const modal = document.getElementById("serviceModal");
    if (!modal) return;

    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalDescription").textContent = data.description;
    document.getElementById("modalImage").src = data.image;
    modal.classList.remove("hidden");
}
