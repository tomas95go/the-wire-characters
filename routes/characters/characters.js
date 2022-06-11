const express = require("express");
const router = express.Router();

const characters = [
  {
    id: 1,
    name: `Chris Partlow`,
    img: `https://www.hbo.com/content/dam/hbodata/series/the-wire/character/the-street/chris-partlow-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg`,
  },
  {
    id: 2,
    name: `Lester Freamon`,
    img: `https://www.hbo.com/content/dam/hbodata/series/the-wire/character/the-law/lester-freamon-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg`,
  },
  {
    id: 3,
    name: `Avon Barksdale`,
    img: `https://www.hbo.com/content/dam/hbodata/series/the-wire/character/the-street/avon-barksdale-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg`,
  },
  {
    id: 4,
    name: `Omar Little`,
    img: `https://www.hbo.com/content/dam/hbodata/series/the-wire/character/the-street/omar-little-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg`,
  },
];

router.get("/", (req, res) => {
  res.render(`index`);
});

router.get(`/list`, (req, res) => {
  res.json({
    characters,
  });
});

module.exports = router;