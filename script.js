const API = "https://script.google.com/macros/s/AKfycbxQyPyrXrXhbHNJnHui51qjv-6jAlUg5_SeXKl9T9Wpxd7LQ4BEEnQ7hUmqhy7L4no_Ew/exec";

let answers = {}

document.getElementById("startBtn").onclick = () => {
  document.getElementById("start").style.display = "none"
  document.getElementById("quiz").style.display = "block"
}

// collect answers
document.querySelectorAll("input[type=radio]").forEach(el => {
  el.addEventListener("change", e => {
    answers[e.target.name] = e.target.value
  })
})

// finish test
document.getElementById("finishBtn").onclick = async () => {

  const payload = new FormData()

  payload.append("level", document.getElementById("level").value)
  payload.append("know_major", document.getElementById("know_major").value)
  payload.append("expected_major", document.getElementById("expected_major").value)
  payload.append("answers", JSON.stringify(answers))

  const res = await fetch(API, {
    method: "POST",
    body: payload
  })

  const data = await res.json()

  document.getElementById("result").innerHTML =
    "You should go to: " + data.predicted

  document.getElementById("rating").style.display = "block"

  window.predicted = data.predicted
}

// rating
document.getElementById("submitRating").onclick = async () => {

  const payload = new FormData()

  payload.append("level", document.getElementById("level").value)
  payload.append("know_major", document.getElementById("know_major").value)
  payload.append("expected_major", document.getElementById("expected_major").value)
  payload.append("answers", JSON.stringify(answers))
  payload.append("predicted", window.predicted)
  payload.append("is_correct", document.querySelector('input[name="correct"]:checked').value)
  payload.append("feedback", document.getElementById("feedback").value)

  await fetch(API, {
    method: "POST",
    body: payload
  })

  alert("Saved ✅")
}


document.getElementById("submitBtn").addEventListener("click", async () => {
  if (!latestPredicted) {
    alert("Get the result first.");
    return;
  }

  const correctChoice = document.querySelector('input[name="is_correct"]:checked');
  if (!correctChoice) {
    alert("Choose whether the result matches or not.");
    return;
  }

  const status = document.getElementById("status");
  status.textContent = "Saving...";
  status.className = "status";

  const payload = new FormData();
  payload.append("level", document.getElementById("level").value);
  payload.append("know_major", document.getElementById("know_major").value);
  payload.append("expected_major", document.getElementById("expected_major").value.trim());
  payload.append("answers", JSON.stringify(buildReadableAnswers(latestAnswers)));
  payload.append("predicted", titleCaseCollege(latestPredicted));
  payload.append("is_correct", correctChoice.value);
  payload.append("feedback", document.getElementById("feedback").value.trim());

  try {
    const res = await fetch(API, {
      method: "POST",
      body: payload
    });

    const data = await res.json();

    if (!data.ok) {
      throw new Error(data.error || "Unknown save error");
    }

    status.textContent = "Saved successfully.";
    status.className = "status success";
  } catch (err) {
    status.textContent = `Could not save: ${err.message}`;
    status.className = "status error";
  }
});