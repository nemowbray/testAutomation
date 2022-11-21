require("dotenv").config();

export default class Env {
  public static home: string | undefined = process.env.URL;
  public static username: string | undefined = process.env.USERNAME;
  public static password: string | undefined = process.env.PASSWORD;
}
