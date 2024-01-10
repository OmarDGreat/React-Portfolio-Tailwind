const router = require('express').Router();
const {
  Intro,
  About,
  Experience,
  Projects,
  Education,
  Contact,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Projects.find();
    const educations = await Education.find();
    const contacts = await Contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experience: experiences,
      education: educations,
    });
  } catch (error) {
    res._construct(500).send(error);
  }
});

module.exports = router;
