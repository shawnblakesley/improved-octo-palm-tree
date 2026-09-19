/* =========================================================================
   Curated video references, keyed by unit id (p1..p9) and lesson id
   (p1l1..p9l4).

   This map is intentionally empty. No links have been verified, and the site
   never invents URLs. Add entries as you collect and vet them:

     p1: [
       v("Video title", "Channel", "https://www.youtube.com/watch?v=XXXXXXXXXXX")
     ],
     p1l1: [ ... ]

   Unit-level keys render in the unit header; lesson-level keys render inside
   that lesson. Videos already shown at the unit level are hidden in lessons.
   ========================================================================= */

(function () {
  "use strict";

  function v(title, channel, url) { return { title: title, channel: channel, url: url }; }

  var VIDEO_FOR = {};

  window.VIDEOS = { map: VIDEO_FOR, forKey: function (key) { return VIDEO_FOR[key] || []; } };
})();
