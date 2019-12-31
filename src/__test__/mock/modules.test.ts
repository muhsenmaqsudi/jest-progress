import axios from "axios";
import Users from "./Users";

jest.mock("axios");

test("should fetch users", () => {
  const users = [{ name: "Bob" }];
  const res = { data: users };
  // @ts-ignore
  axios.get.mockResolvedValue(res);

  return Users.all().then(data => {
    expect(data).toEqual(users);
    console.log(data);
  });
});
