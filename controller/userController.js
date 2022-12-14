import User from "../model/user.js";

export const addUser = async (request, response) => {
  try {
    let exist = await User.findOne({ sub: request.body.sub });
    if (exist) {
      console.log("reached add user")
      response.status(200).json("user already exists");
      return;
    }
    console.log("reached add user")
    const newUser = new User(request.body);
    await newUser.save();
    response.status(200).json(newUser);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getUser = async (request, response) => {
  try {
    const users = await User.find({});
    // console.log(users)
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json(error);
  }
};
