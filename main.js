async function sendMessage() {
    const input = document.getElementById("userInput").value;
    const chatBox = document.getElementById("chatBox");

    chatBox.innerHTML += `<div><strong>You:</strong> ${input}</div>`;

    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();
    chatBox.innerHTML += `<div><strong>AI:</strong> ${data.reply}</div>`;
    document.getElementById("userInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  AOS.init();
     const chatBox = document.getElementById("chatBox");
  const userInput = document.getElementById("userInput");

  function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Display user message
    const userMsg = document.createElement("div");
    userMsg.className = "text-end mb-2";
    userMsg.innerHTML = `<span class="badge bg-light text-dark">${message}</span>`;
    chatBox.appendChild(userMsg);

    // Generate bot response
    const botMsg = document.createElement("div");
    botMsg.className = "text-start mb-2";
    botMsg.innerHTML = `<span class="badge bg-secondary">Thinking...</span>`;
    chatBox.appendChild(botMsg);

    setTimeout(() => {
      botMsg.innerHTML = `<span class="badge bg-primary">${getBotReply(message)}</span>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);

    userInput.value = "";
  }

  function getBotReply(msg) {
    msg = msg.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hi there! 👋 How can I assist you today?";
    } else if (msg.includes("price") || msg.includes("cost")) {
      return "Our Starter plan begins at just $5/month. Would you like to see more options?";
    } else if (msg.includes("support")) {
      return "You can reach our support team 24/7 via live chat or email at support@primex.dev.";
    } else if (msg.includes("features")) {
      return "We offer code deployment, email APIs, database hosting, and more!";
    } else if (msg.includes("thank")) {
      return "You're welcome! 😊 Let me know if there's anything else I can help with.";
    } else {
      return "I'm still learning! Please ask about pricing, support, or features.";
    }
  }

  // Allow Enter key to send message
  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
  const cookieBox = document.querySelector(".wrapper"),
buttons = document.querySelectorAll(".button");
const executeCodes = () => {
//if cookie contains codinglab it will be returned and below of this code will not run
if (document.cookie.includes("codinglab")) return;
cookieBox.classList.add("show");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    cookieBox.classList.remove("show");
    //if button has acceptBtn id
    if (button.id == "acceptBtn") {
      //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
      document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
    }
  });
});
};
//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);

