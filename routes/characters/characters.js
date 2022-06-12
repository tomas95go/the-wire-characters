const express = require("express");
const router = express.Router();

const characters = [
  {
    id: 1,
    name: `Chris Partlow`,
    img: `https://www.hbo.com/content/dam/hbodata/series/the-wire/character/the-street/chris-partlow-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg`,
    alt: `Chris Partlow`,
  },
  {
    id: 2,
    name: `Lester Freamon`,
    img: `https://www.hbo.com/content/dam/hbodata/series/the-wire/character/the-law/lester-freamon-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg`,
    alt: `Lester Freamon`,
  },
  {
    id: 3,
    name: `Avon Barksdale`,
    img: `https://www.hbo.com/content/dam/hbodata/series/the-wire/character/the-street/avon-barksdale-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg`,
    alt: `Avon Barksdale`,
  },
  {
    id: 4,
    name: `Omar Little`,
    img: `https://www.hbo.com/content/dam/hbodata/series/the-wire/character/the-street/omar-little-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg`,
    alt: `Omar Little`,
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

router.post(`/add`, (req, res) => {
  characters.push(req.body);
  res.status(200).json({
    title: `Success!`,
    message: `${req.body.name} was added to the list!`,
    character: req.body,
  });
});

module.exports = router;
