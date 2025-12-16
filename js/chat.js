/* ================================
   CHAT DEMO LOGIC (NO STORAGE)
================================ */

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/* ---------- INIT CHAT ---------- */
function initChat() {
  const seller = getQueryParam("seller") || "Seller";
  const product = getQueryParam("product") || "Item";

  document.getElementById("sellerName").textContent = seller;
  document.getElementById("productTitle").textContent = product;
}

initChat();

/* ---------- SEND MESSAGE ---------- */
function sendMessage() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;

  const chat = document.getElementById("chatMessages");

  /* USER MESSAGE */
  chat.innerHTML += `
    <div class="max-w-3xl mx-auto">
      <div class="flex justify-end">
        <div class="bg-collex-teal text-white px-5 py-3 
                    rounded-2xl rounded-br-sm 
                    max-w-md shadow">
          ${text}
          <p class="text-[10px] text-right mt-1 opacity-80">
            Just now
          </p>
        </div>
      </div>
    </div>
  `;

  input.value = "";
  chat.scrollTop = chat.scrollHeight;

  /* FAKE SELLER REPLY */
  setTimeout(() => {
    chat.innerHTML += `
      <div class="max-w-3xl mx-auto">
        <div class="flex justify-start">
          <div class="bg-white dark:bg-gray-800 px-5 py-3 
                      rounded-2xl rounded-bl-sm 
                      max-w-md border shadow-sm 
                      text-gray-800 dark:text-gray-200">
            Sounds good! Let me know when you'd like to meet.
          </div>
        </div>
      </div>
    `;
    chat.scrollTop = chat.scrollHeight;
  }, 900);
}

/* ---------- BACK BUTTON ---------- */
function goBack() {
  window.history.back();
}
