import User from "./users.models.js";
import Task from "./tasks.models.js";
import Categorie from "./categories.models.js";

const initModels = () => {
  User.belongsToMany(Task, { through: "userTasks" });
  Task.belongsToMany(User, { through: "userTasks" });

  Categorie.hasMany(Task, { foreignKey: "categorieId" });

  Task.belongsTo(Categorie, { foreignKey: "categorieId" });
};

export default initModels;
