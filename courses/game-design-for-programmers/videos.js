/* =========================================================================
   Curated video references, keyed by unit id (p1..p9) and lesson id
   (p1l1..p9l4).

   Every link below was verified against YouTube's public oEmbed endpoint
   (https://www.youtube.com/oembed?url=...&format=json), which returned HTTP
   200 with a matching `title` and `author_name`. Verification date: 2026-09-19.
   Videos that failed verification were discarded; no URLs are invented.

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

  var VIDEO_FOR = {
    // p1 "Foundations of Game Design"
    p1: [
      v("How To Think Like A Game Designer", "Game Maker's Toolkit", "https://www.youtube.com/watch?v=iIOIT3dCy5w")
    ],
    p1l2: [
      v("Aesthetics of Play - Redefining Genres in Gaming", "Extra Credits", "https://www.youtube.com/watch?v=uepAJ-rqJKA")
    ],
    p1l3: [
      v("The Magic Circle - How Games Transport Us to New Worlds", "Extra Credits", "https://www.youtube.com/watch?v=qZ-EY9gTsgU")
    ],

    // p2 "Mechanics, Systems & Emergence"
    p2l1: [
      v("The Real Core Loop - What Every Game Has In Common", "Extra Credits", "https://www.youtube.com/watch?v=mGL5YGcAxEI")
    ],
    p2l3: [
      v("The Rise of the Systemic Game", "Game Maker's Toolkit", "https://www.youtube.com/watch?v=SnpAAX9CkIc")
    ],
    p2l4: [
      v("Secrets of Game Feel and Juice", "Game Maker's Toolkit", "https://www.youtube.com/watch?v=216_5nu4aVQ")
    ],

    // p3 "Player Psychology & Motivation"
    p3l1: [
      v("Bartle's Taxonomy - What Type of Player are You?", "Extra Credits", "https://www.youtube.com/watch?v=yxpW2ltDNow")
    ],
    p3l2: [
      v("Intrinsic vs Extrinsic - Designing Good Rewards in Games", "Extra Credits", "https://www.youtube.com/watch?v=h86g-XgUCA8")
    ],
    p3l3: [
      v("What's The Point Of Hard Games, Anyway?", "Game Maker's Toolkit", "https://www.youtube.com/watch?v=Ip5pYl-MuYs")
    ],

    // p4 "Chance, Skill & Balance"
    p4l1: [
      v("The Two Types of Random in Game Design", "Game Maker's Toolkit", "https://www.youtube.com/watch?v=dwI5b-wRLic")
    ],
    p4l2: [
      v("How Games Get Balanced", "Game Maker's Toolkit", "https://www.youtube.com/watch?v=WXQzdXPTb2A")
    ],
    p4l3: [
      v("How Video Game Economies are Designed", "Game Maker's Toolkit", "https://www.youtube.com/watch?v=Zrf1cou_yVo")
    ],

    // p5 "Level & World Design"
    p5l1: [
      v("Ten Principles for Good Level Design", "GDC Festival of Gaming", "https://www.youtube.com/watch?v=iNEe3KhMvXM")
    ],
    p5l2: [
      v("Super Mario 3D World's 4 Step Level Design", "Game Maker's Toolkit", "https://www.youtube.com/watch?v=dBmIkEvEBtA")
    ],
    p5l3: [
      v("How Level Design Can Tell a Story", "Game Maker's Toolkit", "https://www.youtube.com/watch?v=RwlnCn2EB9o")
    ],

    // p6 "Challenge, Enemies & AI"
    p6l1: [
      v("What Makes a Good Puzzle?", "Game Maker's Toolkit", "https://www.youtube.com/watch?v=zsjC6fa_YBg")
    ],
    p6l3: [
      v("The AI of Half-Life: Finite State Machines", "AI and Games", "https://www.youtube.com/watch?v=JyF0oyarz4U")
    ],
    p6l4: [
      v("Boss Up: Boss Battle Design Fundamentals and Retrospective", "GDC Festival of Gaming", "https://www.youtube.com/watch?v=48Ymh4Ge5j8")
    ],

    // p7 "Narrative & Emotion"
    p7l1: [
      v("The Design in Narrative Design", "GDC Festival of Gaming", "https://www.youtube.com/watch?v=f8VIlfTtypg")
    ],
    p7l2: [
      v("Designing Narrative Choice - Add Branching Paths to Game Stories Without a AAA Budget", "Design Doc", "https://www.youtube.com/watch?v=Gdt5zCdXoSc")
    ],
    p7l4: [
      v("The Catharsis of Doing - Designing Emotionally Intense Experiences", "Extra Credits", "https://www.youtube.com/watch?v=hmEa-YAcFk8")
    ],

    // p8 "Production, Ethics & Players"
    p8l1: [
      v("Hitchhiker's Guide to Rapid Prototypes!", "GDC Festival of Gaming", "https://www.youtube.com/watch?v=sYWkiv1hTPM")
    ],
    p8l2: [
      v("Playtesting - How to Get Good Feedback on Your Game", "Extra Credits", "https://www.youtube.com/watch?v=on7endO4lPY")
    ],
    p8l4: [
      v("How to Keep Players Engaged (Without Being Evil)", "Game Maker's Toolkit", "https://www.youtube.com/watch?v=hbzGO_Qonu0")
    ],

    // p9 "Synthesis & Capstone"
    p9l1: [
      v("Counter Play - Making Multiplayer Fun for the Opponent", "Extra Credits", "https://www.youtube.com/watch?v=BRBcjsOt0_g")
    ],
    p9l2: [
      v("Accessibility Best Practices: Mobility Considerations", "GDC Festival of Gaming", "https://www.youtube.com/watch?v=-XBjj69-uK0")
    ],
    p9l4: [
      v("So You're Ready to Pitch to a Publisher? You're Not", "GDC Festival of Gaming", "https://www.youtube.com/watch?v=MP-nmrMb9FQ")
    ]
  };

  window.VIDEOS = { map: VIDEO_FOR, forKey: function (key) { return VIDEO_FOR[key] || []; } };
})();
