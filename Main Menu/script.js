let channels = [];

fetch("data/channels.json")
  .then(res => res.json())
  .then(data => channels = data);

function searchChannel() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const result = document.getElementById("result");

  const channel = channels.find(c => c.name.toLowerCase() === input);

  if (!channel) {
    result.innerHTML = "Channel not found.";
    return;
  }

  const estimatedSubs = channel.subs + channel.dailyGrowth;

  result.innerHTML = `
    <h3>${channel.name}</h3>
    <p>Estimated Subscribers:</p>
    <h1>${estimatedSubs.toLocaleString()}</h1>
    <p>Daily Growth: +${channel.dailyGrowth.toLocaleString()}</p>
  `;
}

function showTab(id) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}
