
module.exports.getAllCardImages = (req, res) => {
    const cardImages = [
      "/images/cat1.jpg",
      "/images/cat2.jpg",
      "/images/cat3.jpg",
      "/images/cat4.jpg",
      "/images/cat5.jpg",
      "/images/cat6.jpg",
      "/images/cat7.jpg",
    ];
    res.status(200).json(cardImages);
  };
  