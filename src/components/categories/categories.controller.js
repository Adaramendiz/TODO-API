import Categorie from "../../models/categories.models.js";

const createCategorie = async (req, res) => {
  try {
    const { body } = req;
    const cat = await Categorie.create(body);
    res.status(201).json(cat);
  } catch (error) {
    res.status(400).json(error);
  }
};

export { createCategorie };
