const express = require("express");
const router = express.Router();

const SchoolModel = require("../models").Schools;




// GET ALL SCHOOLS
router.get("/", async (req, res) => {
    let schools = await SchoolModel.findAll();
    res.json({ schools });
  });

// CREATE A NEW SCHOOL
router.post("/", async (req, res) => {
    let school = await SchoolModel.create(req.body);
    res.json({ school });
  });
  
    // DELETE A SCHOOL
  router.delete("/:id", async (req, res) => {
    await SchoolModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: `School with id ${req.params.id} was deleted`,
    });
  });


  module.exports = router;