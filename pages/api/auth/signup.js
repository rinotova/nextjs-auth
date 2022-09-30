import { hashPassword } from "../../../helpers/auth";
import { createUser } from "../../../prisma/user";

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case 'POST': {
        const { email, password } = req.body;
        const hashedPassword = await hashPassword(password);
        const createdUser = await createUser(email, hashedPassword);
        // TODO add error handling
        console.log(createdUser);
        return res.status(200).json({ success: true });
      }
      default:
        break;
    }
  } catch (error) {
    return res.json({ ...error, message: error.message });
  }
}
