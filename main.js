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
    