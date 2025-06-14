document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dob) {
    result.textContent = "Please select your birth date.";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  if (birthDate > today) {
    result.textContent = "Birth date cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `🎉 You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
});
