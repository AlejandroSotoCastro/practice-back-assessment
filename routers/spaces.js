const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Space = require("../models/").space;
// const User = require("../models/").user;
const Story = require("../models/").story;

const router = new Router();

router.post("/:id/stories", authMiddleware, async (req, res) => {
  const { name, imageUrl, content } = req.body;
  console.log(req.body);
  if (!name) {
    return res.status(400).send({ message: "A story must have a name" });
  }
  const space = await Space.findByPk(req.params.id);

  const newStory = await Story.create({
    name,
    imageUrl,
    content,
    spaceId: space.id,
  });

  return res.status(201).send({ message: "Story created", newStory });
});

router.get("/", async (req, res) => {
  const spaces = await Space.findAll({ include: { model: Story } });
  console.log(spaces);
  return res.status(200).send(spaces);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Space id is not a number" });
  }

  const space = await Space.findByPk(id, {
    include: [Story],
    order: [[Story, "createdAt", "DESC"]],
  });

  if (space === null) {
    return res.status(404).send({ message: "Space not found" });
  }

  res.status(200).send(space);
});

module.exports = router;
