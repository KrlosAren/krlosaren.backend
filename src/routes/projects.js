const express = require('express');
const db = require('../server/db.json');

function projects(app) {
  app.get('/projects', (req, res) => {
    return res.send(db.projects);
  });
}

module.exports = projects;
