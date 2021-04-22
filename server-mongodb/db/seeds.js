const db = connect("mongodb://localhost:27017/projects");

db.repos.drop();

db.repos.insertMany([
    { name: "consoul-log", url: "https://github.com/ecarlos09/consoul-log", site: "https://consoul-log.netlify.app", collabs: 4},
    { name: "habite", url: "https://github.com/ecarlos09/co-habiters", site: "https://habite.netlify.app", collabs: 5},
    { name: "ee-music-app", url: "https://github.com/ecarlos09/ee-music-app", site: "https://choosic-music.netlify.app", collabs: 1},
    { name: "github-repo-finder", url: "https://github.com/ecarlos09/LAP-3-pcc", site: "https://faisal-elwin-github.netlify.app", collabs: 2}
]);