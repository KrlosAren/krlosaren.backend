const express = require('express');
const db = require('../server/db.json');

function projectID(app) {
  app.get('/projects/:projectId', (req, res) => {
    return res.send(
      db.projects.find( project => project.id === Number(req.params.projectId))
    );
  });
}

module.exports = projectID;
