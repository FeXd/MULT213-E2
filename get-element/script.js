console.log("PAGE LOADED");

const output = document.getElementById("output");
for (let i = 0; i < 10; i++) {
    output.innerHTML += "<p>Hello World</p>";
}

const summary = document.getElementById("summary");
summary.innerHTML += "<p>This is the summary.</p>";


