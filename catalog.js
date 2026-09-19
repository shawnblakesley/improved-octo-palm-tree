/* =========================================================================
   Course registry for the Learning Hub.

   This is the single source of truth for the hub page and the app's Go menu.
   Adding a course:

     1. Create courses/<slug>/ with index.html plus its own
        curriculum.js, diagrams.js, videos.js, and app.js.
     2. Set CURRICULUM.id in that course to the same <slug>.
     3. Add an entry below with status "available".
     4. Set status "planned" to list a course that does not exist yet.

   Shared scripts can be UMD-style so both the browser and main.js see them.
   ========================================================================= */

(function (root, factory) {
  "use strict";
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.COURSE_HUB = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  return {
    /* Every course's saved progress lives under this key. app.js uses the
       same helper so the hub and the course never disagree. */
    progressKey: function (id) {
      return "course:" + id + ":progress:v1";
    },

    courses: [
      {
        id: "linear-regression-to-deepseek",
        title: "From Linear Regression to DeepSeek-V4.1-Flash",
        shortTitle: "Linear Regression to V4.1-Flash",
        subtitle: "Build, train, and deploy a frontier-scale language model",
        description:
          "Start from fitting a line and finish able to explain, at the level of equations and code, how DeepSeek-V4.1-Flash is trained and served. Nine phases, hands-on exercises, and a capstone reconstruction.",
        path: "courses/linear-regression-to-deepseek/",
        lessons: 45,
        duration: "9 phases",
        level: "Beginner to advanced",
        tags: ["LLMs", "Transformers", "DeepSeek", "RL", "Serving"],
        accent: "#4f46e5",
        status: "available"
      },

      {
        id: "game-design-for-programmers",
        title: "Game Design for Programmers",
        shortTitle: "Game Design for Programmers",
        subtitle: "A 36-week craft course for experienced developers",
        description:
          "Learn game design as a discipline, not a coding skill: systems and game feel, player psychology, balance and economies, level and narrative design, production ethics, and a playtested capstone. Every one of the 36 lessons ships with vocabulary, exercises, and its own quiz.",
        path: "courses/game-design-for-programmers/",
        lessons: 36,
        duration: "9 units",
        level: "Intermediate",
        tags: ["Game Design", "Systems", "Player Psychology", "Level Design", "Narrative"],
        accent: "#0d9488",
        status: "available"
      }

      /* Template for the next course:

      {
        id: "your-course-slug",
        title: "Your Course Title",
        shortTitle: "Short sidebar label",
        subtitle: "One line describing the outcome",
        description: "A sentence or two for the hub card.",
        path: "courses/your-course-slug/",
        lessons: 20,
        duration: "4 phases",
        level: "Intermediate",
        tags: ["Topic", "Another"],
        accent: "#0d9488",
        status: "planned"          // "planned" shows as Coming soon
      }
      */
    ]
  };
});
