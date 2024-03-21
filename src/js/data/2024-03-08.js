dataSetVersion = "2024-03-08"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game",
    key: "game",
    tooltip: "Check this to restrict to certain games.",
    checked: false,
    sub: [
      { name: "Splatoon 1", key: "s1" },
      { name: "Splatoon 2", key: "s2" },
      { name: "Splatoon 3", key: "s3" },
      { name: "Outside", key: "os" }
    ]
  },
    {
    name: "Filter by Band",
    key: "band",
    tooltip: "Check this to restrict to certain bands.",
    checked: false,
    sub: [
      { name: "Squid Sisters", key: "sqs" },
      { name: "Off the Hook", key: "oth" },
      { name: "Deep Cut", key: "dc" },
      { name: "Turquoise October", key: "to" },
      { name: "DJ Octavio", key: "djo" },
      { name: "Dedf1sh", key: "df" },
      { name: "Alterna World bands", key: "alterna" },
      { name: "Octoplush", key: "op" },
      { name: "Free Association", key: "fa" },
      { name: "Grizzco", key: "grizz" },
      { name: "Bob Dub", key: "bd" },
      { name: "DJ Lee Fish", key: "djlf" },
      { name: "DJ Real Sole", key: "djrs" },
      { name: "Seven Seas Crew", key: "ssc" },
      { name: "Lobby bands", key: "lobby" },
      { name: "Ancho-V Games", key: "avg" },
      { name: "ω-3", key: "o3" },
      { name: "Squid Squad", key: "sqsqd" },
      { name: "Chirpy Chips", key: "abxy" },
      { name: "Hightide Era", key: "hte" },
      { name: "Wet Floor", key: "wf" },
      { name: "Bottom Feeders", key: "bf" },
      { name: "Ink Theory", key: "it" },
      { name: "Diss-Pair", key: "dp" },
      { name: "SashiMori", key: "sm" },
      { name: "C-Side", key: "cs" },
      { name: "Front Roe", key: "fr" },
      { name: "Damp Socks ft. Off the Hook", key: "ds" },
      { name: "Yoko & the Gold Bazookas", key: "yatgb" },
      { name: "H2Whoa", key: "h2w" },
      { name: "Riot Act", key: "ra" },
      { name: "Other", key: "o" }
    ]
  },
  {
    name: "Remove short songs",
    key: "short",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Opening",
    img: "TvW2HXK.jpg",
    opts: {
      game: ['s1'],
      band: ['sqsqd'],
      short: true
    }
  },
  {
    name: "Splattack! (Jam Session)",
    img: "TvW2HXK.jpg",
    opts: {
      game: ['s1'],
      band: ['sqsqd']
    }
  },
  {
    name: "Splattack!",
    img: "TvW2HXK.jpg",
    opts: {
      game: ['s1'],
      band: ['sqsqd']
    }
  },
  {
    name: "Ink or Sink",
    img: "TvW2HXK.jpg",
    opts: {
      game: ['s1'],
      band: ['sqsqd']
    }
  },
  {
    name: "Seaskape",
    img: "TvW2HXK.jpg",
    opts: {
      game: ['s1'],
      band: ['sqsqd']
    }
  },
  {
    name: "Kraken Up",
    img: "TvW2HXK.jpg",
    opts: {
      game: ['s1'],
      band: ['sqsqd']
    }
  },
  {
    name: "Metalopod",
    img: "TvW2HXK.jpg",
    opts: {
      game: ['s1'],
      band: ['sqsqd']
    }
  },
  {
    name: "Now or Never!",
    img: "TvW2HXK.jpg",
    opts: {
      game: ['s1'],
      band: ['sqsqd']
    }
  },
  {
    name: "Shellfie",
    img: "HV7upuM.png",
    opts: {
      game: ['s1'],
      band: ['abxy']
    }
  },
  {
    name: "Split & Splat",
    img: "HV7upuM.png",
    opts: {
      game: ['s1'],
      band: ['abxy']
    }
  },
  {
    name: "Blitz It!",
    img: "fF2lGYT.jpg",
    opts: {
      game: ['s2'],
      band: ['abxy']
    }
  },
  {
    name: "Wave Prism",
    img: "fF2lGYT.jpg",
    opts: {
      game: ['s2'],
      band: ['abxy']
    }
  },
  {
    name: "Slopping Spree",
    img: "NFnpjuz.jpg",
    opts: {
      game: ['s3'],
      band: ['abxy']
    }
  },
  {
    name: "No Quarters",
    img: "NFnpjuz.jpg",
    opts: {
      game: ['s3'],
      band: ['abxy']
    }
  },
  {
    name: "Hooked",
    img: "lPdcx0r.png",
    opts: {
      game: ['s1'],
      band: ['hte']
    }
  },
  {
    name: "Sucker Punch",
    img: "lPdcx0r.png",
    opts: {
      game: ['s1'],
      band: ['hte']
    }
  },
  {
    name: "Opening",
    img: "2t2AAFL.jpg",
    opts: {
      game: ['s2'],
      band: ['wf'],
      short: true
    }
  },
  {
    name: "Inkoming!",
    img: "2t2AAFL.jpg",
    opts: {
      game: ['s2'],
      band: ['wf']
    }
  },
  {
    name: "Rip Entry",
    img: "2t2AAFL.jpg",
    opts: {
      game: ['s2'],
      band: ['wf']
    }
  },
  {
    name: "Undertow",
    img: "2t2AAFL.jpg",
    opts: {
      game: ['s2'],
      band: ['wf']
    }
  },
  {
    name: "Don't Slip",
    img: "2t2AAFL.jpg",
    opts: {
      game: ['s2'],
      band: ['wf']
    }
  },
  {
    name: "Endolphin Surge",
    img: "2t2AAFL.jpg",
    opts: {
      game: ['s2'],
      band: ['wf']
    }
  },
  {
    name: "Now or Never!",
    img: "2t2AAFL.jpg",
    opts: {
      game: ['s2'],
      band: ['wf']
    }
  },
  {
    name: "Turf Master",
    img: "2t2AAFL.jpg",
    opts: {
      game: ['s2'],
      band: ['wf']
    }
  },
  {
    name: "Ink Another Day",
    img: "2t2AAFL.jpg",
    opts: {
      game: ['s2'],
      band: ['wf']
    }
  },
  {
    name: "Inkoming! (Cloud Demo)",
    img: "2t2AAFL.jpg",
    opts: {
      game: ['s2'],
      band: ['wf']
    }
  },
  {
    name: "Shipwreckin'",
    img: "USGEzNy.jpg",
    opts: {
      game: ['s2'],
      band: ['bf']
    }
  },
  {
    name: "Fins & Fiddles",
    img: "USGEzNy.jpg",
    opts: {
      game: ['s2'],
      band: ['bf']
    }
  },
  {
    name: "Seafoam Shanty",
    img: "USGEzNy.jpg",
    opts: {
      game: ['s2'],
      band: ['bf']
    }
  },
  {
    name: "Broken Coral",
    img: "1XpujZu.jpg",
    opts: {
      game: ['s2'],
      band: ['it']
    }
  },
  {
    name: "Riptide Rapture",
    img: "1XpujZu.jpg",
    opts: {
      game: ['s2'],
      band: ['it']
    }
  },
  {
    name: "Seasick",
    img: "epnuL5U.jpg",
    opts: {
      game: ['s2'],
      band: ['dp']
    }
  },
  {
    name: "Kinetosis",
    img: "epnuL5U.jpg",
    opts: {
      game: ['s2'],
      band: ['dp']
    }
  },
  {
    name: "Chopscrewey",
    img: "eI6yNuV.jpg",
    opts: {
      game: ['s2'],
      band: ['sm']
    }
  },
  {
    name: "Entropical",
    img: "eI6yNuV.jpg",
    opts: {
      game: ['s2'],
      band: ['sm']
    }
  },
  {
    name: "Opening",
    img: "751sXts.jpg",
    opts: {
      game: ['s3'],
      band: ['cs'],
      short: true
    }
  },
  {
    name: "Clickbait (Splash Sessions Demo)",
    img: "751sXts.jpg",
    opts: {
      game: ['s3'],
      band: ['cs']
    }
  },
  {
    name: "Clickbait",
    img: "751sXts.jpg",
    opts: {
      game: ['s3'],
      band: ['cs']
    }
  },
  {
    name: "Headhammer",
    img: "751sXts.jpg",
    opts: {
      game: ['s3'],
      band: ['cs']
    }
  },
  {
    name: "Triple Dip",
    img: "751sXts.jpg",
    opts: {
      game: ['s3'],
      band: ['cs']
    }
  },
  {
    name: "Paintscraper",
    img: "751sXts.jpg",
    opts: {
      game: ['s3'],
      band: ['cs']
    }
  },
  {
    name: "Splattack!",
    img: "751sXts.jpg",
    opts: {
      game: ['s3'],
      band: ['cs']
    }
  },
  {
    name: "Now or Never!",
    img: "751sXts.jpg",
    opts: {
      game: ['s3'],
      band: ['cs']
    }
  },
  {
    name: "Rinse/Repeat",
    img: "751sXts.jpg",
    opts: {
      game: ['s3'],
      band: ['cs']
    }
  },
  {
    name: "Learning Curve",
    img: "751sXts.jpg",
    opts: {
      game: ['s3'],
      band: ['cs']
    }
  },
  {
    name: "Clickbait (Demo Tape)",
    img: "751sXts.jpg",
    opts: {
      game: ['os'],
      band: ['cs']
    }
  },
  {
    name: "Paintscraper (Uotora Demo)",
    img: "751sXts.jpg",
    opts: {
      game: ['os'],
      band: ['cs']
    }
  },
  {
    name: "Sea Me Now",
    img: "7TgSyB7.jpg",
    opts: {
      game: ['s3'],
      band: ['fr']
    }
  },
  {
    name: "Sandy Side Up",
    img: "7TgSyB7.jpg",
    opts: {
      game: ['s3'],
      band: ['fr']
    }
  },
  {
    name: "Candy-Coated Rocks",
    img: "EQ3tigD.png",
    opts: {
      game: ['s3'],
      band: ['ds']
    }
  },
  {
    name: "Tentacle to the Metal",
    img: "EQ3tigD.png",
    opts: {
      game: ['s3'],
      band: ['ds']
    }
  },
  {
    name: "Ska-BLAM",
    img: "7uHyVKl.jpg",
    opts: {
      game: ['s3'],
      band: ['yatgb']
    }
  },
  {
    name: "Three-Horns Circus",
    img: "7uHyVKl.jpg",
    opts: {
      game: ['s3'],
      band: ['yatgb']
    }
  },
  {
    name: "Rockagilly Blues",
    img: "7uHyVKl.jpg",
    opts: {
      game: ['s3'],
      band: ['yatgb']
    }
  },
  {
    name: "Ripstop & Go",
    img: "puRREUf.jpg",
    opts: {
      game: ['s3'],
      band: ['h2w']
    }
  },
  {
    name: "Aquasonic",
    img: "puRREUf.jpg",
    opts: {
      game: ['s3'],
      band: ['h2w']
    }
  },
  {
    name: "Shifting Stars",
    img: "cGRR7gn.jpeg",
    opts: {
      game: ['s3'],
      band: ['ra']
    }
  },
  {
    name: "No Plan Survives",
    img: "cGRR7gn.jpeg",
    opts: {
      game: ['s3'],
      band: ['ra']
    }
  },
  {
    name: "Inkopolis News",
    img: "qZQlJtI.jpg",
    opts: {
      game: ['s1'],
      band: ['sqs']
    }
  },
  {
    name: "City of Color",
    img: "qZQlJtI.jpg",
    opts: {
      game: ['s1'],
      band: ['sqs']
    }
  },
  {
    name: "Splatfest – Match Opening",
    img: "qZQlJtI.jpg",
    opts: {
      game: ['s1'],
      band: ['sqs'],
      short: true
    }
  },
  {
    name: "Ink Me Up",
    img: "qZQlJtI.jpg",
    opts: {
      game: ['s1'],
      band: ['sqs']
    }
  },
  {
    name: "Now or Never!",
    img: "qZQlJtI.jpg",
    opts: {
      game: ['s1'],
      band: ['sqs']
    }
  },
  {
    name: "Calamari Inkantation",
    img: "qZQlJtI.jpg",
    opts: {
      game: ['s1'],
      band: ['sqs']
    }
  },
  {
    name: "Maritime Memory",
    img: "qZQlJtI.jpg",
    opts: {
      game: ['s1'],
      band: ['sqs']
    }
  },
  {
    name: "Bomb Rush Blush",
    img: "qZQlJtI.jpg",
    opts: {
      game: ['os'],
      band: ['sqs']
    }
  },
  {
    name: "Tide Goes Out",
    img: "qZQlJtI.jpg",
    opts: {
      game: ['os'],
      band: ['sqs']
    }
  },
  {
    name: "Spicy Calamari Inkantation",
    img: "rmoY8n5.jpg",
    opts: {
      game: ['s2'],
      band: ['sqs']
    }
  },
  {
    name: "Fresh Start",
    img: "rmoY8n5.jpg",
    opts: {
      game: ['s2'],
      band: ['sqs']
    }
  },
  {
    name: "Wave Goodbye",
    img: "iud6roH.jpg",
    opts: {
      game: ['s3'],
      band: ['sqs']
    }
  },
  {
    name: "Liquid Sunshine",
    img: "qZQlJtI.jpg",
    opts: {
      game: ['s3'],
      band: ['sqs']
    }
  },
  {
    name: "City of Color (2023)",
    img: "qZQlJtI.jpg",
    opts: {
      game: ['s3'],
      band: ['sqs']
    }
  },
  {
    name: "Tomorrow's Nostalgia Today",
    img: "qZQlJtI.jpg",
    opts: {
      game: ['s3'],
      band: ['sqs']
    }
  },
  {
    name: "Inkopolis News",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Splatfest – Theme Announcement",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth'],
      short: true
    }
  },
  {
    name: "Color Pulse",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Splatfest – Match Opening",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth'],
      short: true
    }
  },
  {
    name: "Ebb & Flow",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Acid Hues",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Muck Warfare",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Now or Never!",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Fest Zest",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Party's Over",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Splatfest – Final Results",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth'],
      short: true
    }
  },
  {
    name: "Shark Bytes",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Nasty Majesty",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Last Battle Opening",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth'],
      short: true
    }
  },
  {
    name: "Fly Octo Fly",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Ebb & Flow (Octo)",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Into the Light",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "#$@%* Dudes Be #$@%* Sleepin",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Ebb & Flow (Demo)",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Now or Never! (SPLATOCALYPSE)",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s2'],
      band: ['oth']
    }
  },
  {
    name: "Anarchy Splatcast",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Deep Cut's Theme",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Surprise and Shine",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Hide and Sleek",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Smeared Canvas",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Calamari Inkantation 3MIX",
    img: "yz7bhnp.png",
    opts: {
      game: ['s3'],
      band: ['dc','sqs']
    }
  },
  {
    name: "Anarchy Poisons (Bird Mix)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Anarchy Poisons (Snake Mix)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Anarchy Poisons (Boar Mix)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Anarchy Splatcast (Splatfest)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Anarchy Rainbow",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Splatfest · Theme Announcement",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc'],
      short: true
    }
  },
  {
    name: "Splatfest · Match Opening",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc'],
      short: true
    }
  },
  {
    name: "Fins in the Air",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "'Till Depth Do Us Part",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Now or Never!",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Ego Overboard",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Still Swimmin'",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Splatfest – Final Results",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc'],
      short: true
    }
  },
  {
    name: "Big Betrayal",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Daybreaker Anthem",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Ego Overboard (Shiver)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Ego Overboard (Frye)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Ego Overboard (Big Man)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Still Swimmin' (Shiver)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Still Swimmin' (Frye)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Still Swimmin' (Big Man)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Anarchy Rainbow (Splatoween)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Ego Overboard (Splatoween)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Still Swimmin' (Splatoween)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Anarchy Rainbow (FrostyFest)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Ego Overboard (FrostyFest)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "Still Swimmin' (FrostyFest)",
    img: "Dh2K8rG.png",
    opts: {
      game: ['s3'],
      band: ['dc']
    }
  },
  {
    name: "I am Octavio",
    img: "i87xXbQ.png",
    opts: {
      game: ['s1'],
      band: ['djo']
    }
  },
  {
    name: "Bomb Rush Blush",
    img: "i87xXbQ.png",
    opts: {
      game: ['s2'],
      band: ['djo', 'sqs']
    }
  },
  {
    name: "Tidal Rush",
    img: "i87xXbQ.png",
    opts: {
      game: ['s2'],
      band: ['djo', 'sqs']
    }
  },
  {
    name: "Inkopolis Memorial Mixtape",
    img: "i87xXbQ.png",
    opts: {
      game: ['os'],
      band: ['djo']
    }
  },
  {
    name: "I'm Octavio (F34RME Remix)",
    img: "i87xXbQ.png",
    opts: {
      game: ['s3'],
      band: ['djo']
    }
  },
  {
    name: "Eight-Legged Advance",
    img: "jWtSTnG.jpg",
    opts: {
      game: ['s1'],
      band: ['to']
    }
  },
  {
    name: "Tentacular Circus",
    img: "jWtSTnG.jpg",
    opts: {
      game: ['s1'],
      band: ['to']
    }
  },
  {
    name: "Cephaloparade",
    img: "jWtSTnG.jpg",
    opts: {
      game: ['s1'],
      band: ['to']
    }
  },
  {
    name: "Inkstrike Shuffle",
    img: "jWtSTnG.jpg",
    opts: {
      game: ['s1'],
      band: ['to']
    }
  },
  {
    name: "Octoling Rendezvous",
    img: "jWtSTnG.jpg",
    opts: {
      game: ['s1'],
      band: ['to']
    }
  },
  {
    name: "Octoweaponry",
    img: "jWtSTnG.jpg",
    opts: {
      game: ['s1'],
      band: ['to']
    }
  },
  {
    name: "Octo Canyon",
    img: "jP7Doa8.png",
    opts: {
      game: ['s2'],
      band: ['to']
    }
  },
  {
    name: "Octo Eight Step",
    img: "jP7Doa8.png",
    opts: {
      game: ['s2'],
      band: ['to']
    }
  },
  {
    name: "The Girl from Inkopolis",
    img: "jP7Doa8.png",
    opts: {
      game: ['s2'],
      band: ['to']
    }
  },
  {
    name: "Buoyant Boogie",
    img: "jP7Doa8.png",
    opts: {
      game: ['s2'],
      band: ['to']
    }
  },
  {
    name: "Shooting Starfish",
    img: "jP7Doa8.png",
    opts: {
      game: ['s2'],
      band: ['to']
    }
  },
  {
    name: "Boss Entrance",
    img: "jP7Doa8.png",
    opts: {
      game: ['s2'],
      band: ['to'],
      short: true
    }
  },
  {
    name: "Octarmaments",
    img: "jP7Doa8.png",
    opts: {
      game: ['s2'],
      band: ['to']
    }
  },
  {
    name: "Onward!",
    img: "jP7Doa8.png",
    opts: {
      game: ['s2'],
      band: ['to'],
      short: true
    }
  },
  {
    name: "R.I.P.",
    img: "jP7Doa8.png",
    opts: {
      game: ['s2'],
      band: ['to'],
      short: true
    }
  },
  {
    name: "Crater Eighters Routine",
    img: "jP7Doa8.png",
    opts: {
      game: ['s3'],
      band: ['to']
    }
  },
  {
    name: "Mission Clear! (The Crater)",
    img: "jP7Doa8.png",
    opts: {
      game: ['s3'],
      band: ['to'],
      short: true
    }
  },
  {
    name: "Nine out of Tension",
    img: "N0GKBZf.png",
    opts: {
      game: ['s3'],
      band: ['op']
    }
  },
  {
    name: "Underwater Neon",
    img: "N0GKBZf.png",
    opts: {
      game: ['s3'],
      band: ['op']
    }
  },
  {
    name: "Flop to It",
    img: "N0GKBZf.png",
    opts: {
      game: ['s3'],
      band: ['op']
    }
  },
  {
    name: "Smoke and Mirrors",
    img: "N0GKBZf.png",
    opts: {
      game: ['s3'],
      band: ['op']
    }
  },
  {
    name: "Ride or Fry",
    img: "N0GKBZf.png",
    opts: {
      game: ['s3'],
      band: ['op']
    }
  },
  {
    name: "With Flying Colors",
    img: "N0GKBZf.png",
    opts: {
      game: ['s3'],
      band: ['op']
    }
  },
  {
    name: "Seep & Destroy",
    img: "N0GKBZf.png",
    opts: {
      game: ['s3'],
      band: ['op']
    }
  },
  {
    name: "Marine Machines",
    img: "N0GKBZf.png",
    opts: {
      game: ['s3'],
      band: ['op']
    }
  },
  {
    name: "#35 caught",
    img: "N0GKBZf.png",
    opts: {
      game: ['s3'],
      band: ['op']
    }
  },
  {
    name: "Don't Flinch",
    img: "N0GKBZf.png",
    opts: {
      game: ['s3'],
      band: ['op']
    }
  },
  {
    name: "In Filtration",
    img: "N0GKBZf.png",
    opts: {
      game: ['s3'],
      band: ['op']
    }
  },
  {
    name: "Happy Little Workers",
    img: "hTOtIDI.jpg",
    opts: {
      game: ['s2'],
      band: ['grizzco']
    }
  },
  {
    name: "Salmon Run Opening",
    img: "hTOtIDI.jpg",
    opts: {
      game: ['s2'],
      band: ['grizzco'],
      short: true
    }
  },
  {
    name: "Even Further",
    img: "hTOtIDI.jpg",
    opts: {
      game: ['s2'],
      band: ['grizzco']
    }
  },
  {
    name: "Get the Shining Future!",
    img: "hTOtIDI.jpg",
    opts: {
      game: ['os'],
      band: ['grizzco']
    }
  },
  {
    name: "Happy Little Workers - 24/7 Mix",
    img: "cbobVqs.png",
    opts: {
      game: ['s3'],
      band: ['grizzco']
    }
  },
  {
    name: "Salmon Run Success Jingle No. 1",
    img: "cbobVqs.png",
    opts: {
      game: ['s3'],
      band: ['grizzco'],
      short: true
    }
  },
  {
    name: "Salmon Run Failure Jingle",
    img: "cbobVqs.png",
    opts: {
      game: ['s3'],
      band: ['grizzco'],
      short: true
    }
  },
  {
    name: "Salmon Run Success Jungle No. 2",
    img: "cbobVqs.png",
    opts: {
      game: ['s3'],
      band: ['grizzco'],
      short: true
    }
  },
  {
    name: "Salmon Run Success Jungle No. 3 (Before King)",
    img: "cbobVqs.png",
    opts: {
      game: ['s3'],
      band: ['grizzco'],
      short: true
    }
  },
  {
    name: "Salmon Run Success Jungle No. 4 (After King)",
    img: "cbobVqs.png",
    opts: {
      game: ['s3'],
      band: ['grizzco'],
      short: true
    }
  },
  {
    name: "Anarchy Splatcast (Big Run)",
    img: "cbobVqs.png",
    opts: {
      game: ['s3'],
      band: ['grizzco']
    }
  },
  {
    name: "Not Bad (Do Better)",
    img: "cbobVqs.png",
    opts: {
      game: ['s3'],
      band: ['grizzco']
    }
  },
  {
    name: "Thrilling Corporate News",
    img: "cbobVqs.png",
    opts: {
      game: ['s3'],
      band: ['grizzco']
    }
  },
  {
    name: "Mr. Grizz Appears",
    img: "cbobVqs.png",
    opts: {
      game: ['s3'],
      band: ['grizzco'],
      short: true
    }
  },
  {
    name: "Rocket Launch",
    img: "cbobVqs.png",
    opts: {
      game: ['s3'],
      band: ['grizzco']
    }
  },
  {
    name: "Bear with Me",
    img: "cbobVqs.png",
    opts: {
      game: ['s3'],
      band: ['grizzco']
    }
  },
  {
    name: "#0.1 style",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s3'],
      band: ['df']
    }
  },
  {
    name: "#12.2 awakened",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s3'],
      band: ['df']
    }
  },
  {
    name: "#47 onward",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s3'],
      band: ['df','oth']
    }
  },
  {
    name: "Leaving with Pearl",
    img: "xeNDTtk.png",
    opts: {
      game: ['s3'],
      band: ['o']
    }
  },
  {
    name: "Origin of Order",
    img: "xeNDTtk.png",
    opts: {
      game: ['s3'],
      band: ['o']
    }
  },
  {
    name: "Unsconscience",
    img: "NVLGYzT.png",
    opts: {
      game: ['s3'],
      band: ['oth']
    }
  },
  {
    name: "Spectrum Obligato ~ Ebb & Flow (Out of Order)",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s3'],
      band: ['oth', 'df']
    }
  },
  {
    name: "Short Order",
    img: "qoJ6zhM.jpg",
    opts: {
      game: ['s3'],
      band: ['oth']
    }
  },
  {
    name: "demol1sh",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "demoli2h",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "d3molish",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "jest1ng",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "je2ting",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "j3sting",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "rout1nes",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "routine2",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "routin3s",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "souven1r",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "2ouvenir",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "souv3nir",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "j1tters",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "jitter2",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "jitt3rs",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "EchΘ Θnslaught",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "CΘld StΘrage",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "ΘctΘpticΘn",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "New World Order",
    img: "BrBE1Aa.png",
    opts: {
      game: ['s3'],
      band: ['fa']
    }
  },
  {
    name: "Surge & Submerge",
    img: "jor35NJ.jpg",
    opts: {
      game: ['s2', 's3'],
      band: ['o3']
    }
  },
  {
    name: "Deluge Dirge",
    img: "jor35NJ.jpg",
    opts: {
      game: ['s2', 's3'],
      band: ['o3']
    }
  },
  {
    name: "Fishing Frenzy",
    img: "jor35NJ.jpg",
    opts: {
      game: ['s2', 's3'],
      band: ['o3']
    }
  },
  {
    name: "Frantic Aspic",
    img: "jor35NJ.jpg",
    opts: {
      game: ['s2', 's3'],
      band: ['o3']
    }
  },
  {
    name: "Frothy Waters",
    img: "jor35NJ.jpg",
    opts: {
      game: ['s3'],
      band: ['o3']
    }
  },
  {
    name: "Toxic Anoxic",
    img: "jor35NJ.jpg",
    opts: {
      game: ['s3'],
      band: ['o3']
    }
  },
  {
    name: "Bait & Click (Mutation)",
    img: "jor35NJ.jpg",
    opts: {
      game: ['s3'],
      band: ['o3']
    }
  },
  {
    name: "Bait & Click",
    img: "jor35NJ.jpg",
    opts: {
      game: ['s3'],
      band: ['o3']
    }
  },
  {
    name: "#5 thirsty",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#0 shell",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#1 progress",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#6 frisk",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#4 dunno",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#2 ripped",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#9 party",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#8 regret",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#14 crush",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#13 shade",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#16 salty",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#12 awake",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#11 above",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "#19 bless",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "Splattack! (Octo)",
    img: "AfGuALP.jpg",
    opts: {
      game: ['s2'],
      band: ['df']
    }
  },
  {
    name: "Cap'n Cuttlefish's Theme",
    img: "eDoSvPj.png",
    opts: {
      game: ['s1','s3'],
      band: ['o']
    }
  },
  {
    name: "What's Your Style?",
    img: "eDoSvPj.png",
    opts: {
      game: ['s3'],
      band: ['o']
    }
  },
  {
    name: "The Crater",
    img: "eDoSvPj.png",
    opts: {
      game: ['s3'],
      band: ['o']
    }
  },
  {
    name: "Meeting the New Squidbeak Splatoon",
    img: "mJ2OW8B.png",
    opts: {
      game: ['s3'],
      band: ['o']
    }
  },
  {
    name: "Sandcastles",
    img: "tyRBIae.png",
    opts: {
      game: ['s3'],
      band: ['alterna']
    }
  },
  {
    name: "Sudden Depth",
    img: "aA7Io08.png",
    opts: {
      game: ['s3'],
      band: ['alterna']
    }
  },
  {
    name: "Two Shadows in the Sun",
    img: "KrUJ2nP.png",
    opts: {
      game: ['s3'],
      band: ['alterna']
    }
  },
  {
    name: "Dead Sea",
    img: "zGVNbJk.png",
    opts: {
      game: ['s3'],
      band: ['alterna']
    }
  },
  {
    name: "Whirlpool Tune",
    img: "2x83Sfp.png",
    opts: {
      game: ['s3'],
      band: ['alterna']
    }
  },
  {
    name: "Hyper Diver",
    img: "DvE9ujk.png",
    opts: {
      game: ['s3'],
      band: ['alterna']
    }
  },
  {
    name: "Tableturf Level Selection",
    img: "o5kHG9M.png",
    opts: {
      game: ['s3'],
      band: ['avg']
    }
  },
  {
    name: "Tableturf Deck Selection",
    img: "o5kHG9M.png",
    opts: {
      game: ['s3'],
      band: ['avg']
    }
  },
  {
    name: "Tableturf Main Theme",
    img: "o5kHG9M.png",
    opts: {
      game: ['s3'],
      band: ['avg']
    }
  },
  {
    name: "Tableturf Three Turns Remaining",
    img: "o5kHG9M.png",
    opts: {
      game: ['s3'],
      band: ['avg']
    }
  },
  {
    name: "Tableturf Win Theme",
    img: "o5kHG9M.png",
    opts: {
      game: ['s3'],
      band: ['avg']
    }
  },
  {
    name: "Tableturf Loss or Draw Theme",
    img: "o5kHG9M.png",
    opts: {
      game: ['s3'],
      band: ['avg']
    }
  },
  {
    name: "Tableturf Card List",
    img: "o5kHG9M.png",
    opts: {
      game: ['s3'],
      band: ['avg']
    }
  },
  {
    name: "Inkopolis Lobby",
    img: "0rzlouq.png",
    opts: {
      game: ['s1', 's3'],
      band: ['lobby']
    }
  },
  {
    name: "Without a Dop Doubt",
    img: "0rzlouq.png",
    opts: {
      game: ['s2'],
      band: ['lobby']
    }
  },
  {
    name: "Soak & Stomp",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Sinkopated",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Drip Feed",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Heliocentri City",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Fuzzy Dazzler",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Blop Bop",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Gilded Cage",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Dressed to Krill",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Slick Moves",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Belly Flop",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Gillty",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Pour It On",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Pop 'n' Schlock",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Clashing Colors",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Dorsal Slicer",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Deeper Creepers",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "Yule Tide",
    img: "0rzlouq.png",
    opts: {
      game: ['s3'],
      band: ['lobby']
    }
  },
  {
    name: "The Shoal",
    img: "LYVm9ei.png",
    opts: {
      game: ['s2', 's3'],
      band: ['o']
    }
  },
  {
    name: "Victory!",
    img: "BFe00wQ.png",
    opts: {
      game: ['s1'],
      band: ['o']
    }
  },
  {
    name: "Defeat...",
    img: "BFe00wQ.png",
    opts: {
      game: ['s1'],
      band: ['o']
    }
  },
  {
    name: "Player Editor",
    img: "BFe00wQ.png",
    opts: {
      game: ['s1'],
      band: ['o']
    }
  },
  {
    name: "Inkopolis Tutorial",
    img: "BFe00wQ.png",
    opts: {
      game: ['s1'],
      band: ['o']
    }
  },
  {
    name: "Splatfest – Theme Announcement",
    img: "BFe00wQ.png",
    opts: {
      game: ['s1'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Splatfest – Final Results",
    img: "BFe00wQ.png",
    opts: {
      game: ['s1'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Reward Jingle",
    img: "BFe00wQ.png",
    opts: {
      game: ['s1', 's2', 's3'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Octo Valley",
    img: "BFe00wQ.png",
    opts: {
      game: ['s1'],
      band: ['o']
    }
  },
  {
    name: "Onward!",
    img: "BFe00wQ.png",
    opts: {
      game: ['s1'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "SPLAT!",
    img: "BFe00wQ.png",
    opts: {
      game: ['s1'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Sunken Scroll",
    img: "BFe00wQ.png",
    opts: {
      game: ['s1', 's2', 's3'],
      band: ['o']
    }
  },
  {
    name: "Inkopolis Square Tutorial",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o']
    }
  },
  {
    name: "Low Tide",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o']
    }
  },
  {
    name: "Cap'n Cuttlefish's Theme (Octo) ~ Player Editor",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o']
    }
  },
  {
    name: "Central Station",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o']
    }
  },
  {
    name: "Telephone's Theme",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o']
    }
  },
  {
    name: "Inside the Deepsea Metro Subway Car",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o']
    }
  },
  {
    name: "TEST PASSED!",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Thang Jingle",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Completion",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o']
    }
  },
  {
    name: "Reaching the Surface",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o']
    }
  },
  {
    name: "Actually it's Commander Tartar's Theme",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o']
    }
  },
  {
    name: "The Plan",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o']
    }
  },
  {
    name: "Conclusion",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o']
    }
  },
  {
    name: "Grand Finale",
    img: "BFe00wQ.png",
    opts: {
      game: ['s2'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Welcome to Splatsville!",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o']
    }
  },
  {
    name: "Alterna Citizen Program M-01: Standard Course (Coastline in the Morning Mist)",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Alterna Citizen Program M-02: Challenge Course (Offshore at Dusk)",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Alterna Citizen Program M-00: Init (Test Noise)",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Alterna Citizen Program M-??: mY dEAR",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Mission Complete! (Alterna)",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Reward Jingle (Gold Record)",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Treasure Obtained",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Reformation",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o']
    }
  },
  {
    name: "Combining the Treasures",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "So Smooth",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Go, Agent 3!",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o']
    }
  },
  {
    name: "Massive Fuzzball",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o']
    }
  },
  {
    name: "Lobby Terminal",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "Plaza (Splatoween)",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o']
    }
  },
  {
    name: "Crab-N-Go Stand (Splatoween)",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o']
    }
  },
  {
    name: "Crab-N-Go Stand (FrostyFest)",
    img: "BFe00wQ.png",
    opts: {
      game: ['s3'],
      band: ['o']
    }
  },
  {
    name: "Chorus of Calamari County",
    img: "BFe00wQ.png",
    opts: {
      game: ['os'],
      band: ['o']
    }
  },
  {
    name: "Splattack! (E3 2014)",
    img: "BFe00wQ.png",
    opts: {
      game: ['os'],
      band: ['o']
    }
  },
  {
    name: "Splatoon Boot-Up Drums",
    img: "BFe00wQ.png",
    opts: {
      game: ['os'],
      band: ['o'],
      short: true
    }
  },
  {
    name: "City of Color (Shy-Ho-Shy Demo)",
    img: "BFe00wQ.png",
    opts: {
      game: ['os'],
      band: ['o']
    }
  },
  {
    name: "Splattack! ~ Shellfie (Inkredible New Stages and Gear)",
    img: "BFe00wQ.png",
    opts: {
      game: ['os'],
      band: ['o']
    }
  },
  {
    name: "Splattack! (New Stage Squid Dance)",
    img: "BFe00wQ.png",
    opts: {
      game: ['os'],
      band: ['o']
    }
  },
  {
    name: "2017 Nintendo Switch Presentation Trailer",
    img: "BFe00wQ.png",
    opts: {
      game: ['os'],
      band: ['o']
    }
  },
  {
    name: "SPLATOCALYPSE (Final Fest Announcement - Background Music)",
    img: "BFe00wQ.png",
    opts: {
      game: ['os'],
      band: ['o']
    }
  },
  {
    name: "Emperor Gear Trailer",
    img: "BFe00wQ.png",
    opts: {
      game: ['os'],
      band: ['o']
    }
  },
  {
    name: "Splattack! (18 February 2021 Trailer)",
    img: "BFe00wQ.png",
    opts: {
      game: ['os'],
      band: ['o']
    }
  },
  {
    name: "Side Order Reveal BGM",
    img: "BFe00wQ.png",
    opts: {
      game: ['os'],
      band: ['o']
    }
  },
  {
    name: "Dubble Bath",
    img: "ZMlZ1IY.jpg",
    opts: {
      game: ['s1'],
      band: ['bd']
    }
  },
  {
    name: "Dubble Bath (DIY Remix)",
    img: "ZMlZ1IY.jpg",
    opts: {
      game: ['s2'],
      band: ['bd']
    }
  },
  {
    name: "Lookin' Fresh",
    img: "TTPNlLx.jpg",
    opts: {
      game: ['s1','s3'],
      band: ['djlf']
    }
  },
  {
    name: "New You",
    img: "3zJh6Zz.jpg",
    opts: {
      game: ['s2','s3'],
      band: ['djrs']
    }
  },
  {
    name: "Dripping with Style",
    img: "tb8W3H4.png",
    opts: {
      game: ['s3'],
      band: ['ssc']
    }
  }
];
