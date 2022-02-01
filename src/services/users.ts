import Users, { UserDocument } from '../models/Users'
import { NotFoundError } from '../helpers/apiError'

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

const findAllUsers = async () => {
  return Users.find()
}

export default {
  createUser,
}
