const userModule = require("../model/userModle");

const createUser = async (req, res) => {
  const creatuser = await userModule.create(req.body);
  await creatuser.save();
  res.status(200).send(creatuser);
};

const getAlluser = async (req, res) => {
  const allUser = await userModule.find({});

  res.status(200).send(allUser);
};

const getOneuser = async (req, res) => {
  const id = req.params.id;

  const oneUser = await userModule.findOne({ _id: id });

  res.status(200).send(oneUser);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const deletuser = await userModule.findByIdAndDelete(id);

  res.status(200).send(deletuser);
};

const updateUser = async (req, res) => {
    const id = req.params.id;
  const { name, email, password } = req.body;

  const upateuser = await userModule.updateOne(
    { _id: id },
    {
      $set: {
        name,
        email,
        password,
      },
    },
  );

  res.status(200).send(upateuser);
};

module.exports = { createUser, getAlluser, getOneuser, deleteUser, updateUser };
