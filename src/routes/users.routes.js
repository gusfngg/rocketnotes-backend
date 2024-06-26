const { Router, json } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload")

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const UsersController = require("../controllers/UsersController")
const usersController = new UsersController();

const UserAvatarController = require("../controllers/UserAvatarController")
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;