const input = document.querySelector(".form-control");
const btn = document.querySelector(".btn-success");
const p = document.querySelector(".result p");

btn.addEventListener("click", () => {
  p.innerHTML = `${input.value} test result is ${test(input.value)}`;
  input.value = "";
});

const test = (arg) => {
  const openers = ["{", "[", "("];
  const closers = ["}", "]", ")"];

  const match = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  let lastOpener = [];

  for (let i = 0; i < arg.length; i++) {
    if (openers.includes(arg[i])) {
      lastOpener.push(arg[i]);
    }
    if (closers.includes(arg[i])) {
      const last = lastOpener.pop();
      if (last !== match[arg[i]]) {
        return false;
      }
    }
  }

  return lastOpener.length == 0; // Should be fine here :)
};
