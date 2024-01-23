const router = require("express").Router();
const {
  Intro,
  About,
  Projects,
  Contact,
  Experience,
  Education,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Projects.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const educations = await Education.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
      education: educations,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
