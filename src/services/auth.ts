import bcrypt from 'bcrypt';

export default class AuthService {
  public static async hasPassword(
    password: string,
    salt = 10
  ): Promise<string> {
    return await bcrypt.hash(password, salt);
  }

  public static async comparePasswords(
    password: string,
    hashredPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashredPassword);
  }
}