const express = require('express');
const router = express.Router();

const GithubClient = require("../client/githubClient.js");
const githubClient = new GithubClient();

router.get('/', (req, res, next) => {
  res.render('index', {title: 'Compute Stars'});
});

router.get('/:user/:repo', async(req, res, next) => {
  const user = req.params.user;
  const repo = req.params.repo;
  const result = await githubClient.getStars(user, repo);
  return res.json(result);
})

module.exports = router;
