const Image = require("../models/image");

exports.createImage = (req, res, next) => {
  Image.create({
    url: req.body.name,
  })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to create image!",
        error: err,
      });
    })
    .then((createdImage) => {
      console.log(createdImage);
      res.status(201).json({
        message: "Image successfully added",
        plan: createdImage.dataValues,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error 500 during adding image",
        error: err,
      });
    });
};

exports.updateImage = (req, res, next) => {
  const image_id = req.params.id;
  Image.update(
    {
      url: req.body.name,
    },
    {
      where: {
        id: image_id,
      },
    }
  )
    .then((result) => {
      if (result) {
        res.status(200).json({
          message:
            "Image identified by id " + image_id + " successfully updated",
        });
      } else {
        res.status(401).json({ message: "Cant update Image" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error 500 during updating Image",
        error: err,
      });
    });
};

exports.getImage = (req, res, next) => {
  Image.findByPk(req.params.id)
    .then((image) => {
      if (image) {
        res.status(200).json({
          message: "image successfully fetched ",
          image: image,
        });
      } else {
        res.status(404).json({ message: "image not found " });
      }
    })
    .catch((err) => {
      return res.status(500).json("Error 500 during getting image");
    });
};

exports.getImages = (req, res, next) => {
  Image.findAll()
    .then((images) => {
      res.status(200).json({
        message: "images successfully fetched ",
        images: images,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error 500 during fetching images",
        error: err,
      });
    });
};

exports.deleteImage = (req, res, next) => {
  Image.destroy({
    where: { id: req.params.id },
  })
    .then((result) => {
      if (result) {
        res.status(200).json({ message: "image successfully deleted" });
      } else {
        res.status(401).json({ message: "Couldn't delete the image" });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Error 500 during deleting the image",
        error: err,
      });
    });
};
