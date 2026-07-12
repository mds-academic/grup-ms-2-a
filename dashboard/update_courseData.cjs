const fs = require('fs');

const path = '/Users/yazidhilmi/Documents/cloud/Kalananti-cloud/Academic_Content/B2B/UOB/Async/Middleschool/grupA/dashboard/src/courseData.js';
let content = fs.readFileSync(path, 'utf8');

// Parse the content or do string replacements.
// Since it's a JS file exported with `export const courseData = { ... }`, we can string replace.

content = content.replace(/5: \{/g, '6: {');
content = content.replace(/4: \{/g, '5: {');
content = content.replace(/3: \{/g, '4: {');
content = content.replace(/2: \{/g, '3: {');

// Now add 2: { ... } after 1's closing bracket, but it's easier to just insert it.
// The end of 1 is just before `3: {`.
// Wait, we also need to add startSeconds and endSeconds to 1!

const newTab2 = `
  2: {
    thumbnail: "./thumb_1.png",
    kicker: "Checkpoint 01 · Mini Project",
    title: "Mini Project Form Aman",
    duration: "Materi 1",
    videoId: "UhutS4BVKhk",
    startSeconds: 1349,
    endSeconds: 1392,
    bookmarks: [{"time": 1349, "label": "Instruksi Mini Project"}],
    quizzes: [],
    summaryHtml: \`
      <header class="reading-header">
        <div>
          <p class="label">Mini Project</p>
          <h3>Form Aman</h3>
        </div>
      </header>
      <article class="reading-section">
        <div class="slide-text">
          <p>Tonton instruksi video di atas untuk mengerjakan mini project ini.</p>
        </div>
      </article>
    \`
  },`;

content = content.replace(/3: \{\n\s+thumbnail:/, newTab2 + '\n  3: {\n    thumbnail:');

// Add startSeconds and endSeconds to 1
content = content.replace(/videoId: "UhutS4BVKhk",/, 'videoId: "UhutS4BVKhk",\n    startSeconds: 14,\n    endSeconds: 1338,');

fs.writeFileSync(path, content);
console.log("Updated courseData.js");
