import { deleteUser, getAll, insertUser, updateUser } from "../models/user.models.js";

export async function userControllerGET(req, res, next) {

  const data = await getAll()
  res.status(200).json({
    answer: {
      code: 200,
      data: data,
    },
  });
}

export async function userControllerPOST(req, res, next) {

  await insertUser(req.body)
  res.status(200).json({
    answer: {
      code: 200,
      data: "User angelegt",
    },
  });
}
export async function userControllerUPDATE(req, res, next) {
  await updateUser(req.body)
  res.status(200).json({
    answer: {
      code: 200,
      data: "User wurde upgedatet",
    },
  });
}
export async function userControllerDELETE(req, res, next) {
  await deleteUser(req.body)
  res.status(200).json({
    answer: {
      code: 200,
      data: "DELETE",
    },
  });
}

