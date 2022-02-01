import Users, { UserDocument } from '../models/Users'
import { NotFoundError } from '../helpers/apiError'

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

const findAll = async () => {
  return await Users.find()
}
const findUserById = async (userId: string) => {
  return await Users.findById(userId)
}

export default {
  createUser,
  findAll,
  findById,
}
