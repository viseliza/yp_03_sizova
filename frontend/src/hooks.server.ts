import type { Handle } from '@sveltejs/kit';
import { parse } from 'cookie';
import * as jwt from 'jsonwebtoken';

interface User {
  id: number;
  login: string;
  password: string;
  first_name: string;
  last_name: string;
  father_name: string;
  age: number;
  email: string;
  image: string;
}

const JWT_ACCESS_TOKEN = "d7a428bc721a2e90e5dce093933c5199aa7adadc11c04cdabceb282897d4a2bf";


export const handle: Handle = async ({ event, resolve }) => {
  const { headers } = event.request;
  
  const cookies = parse(headers.get("cookie") ?? "");

  if (cookies.AuthorizationToken) {
    // Remove Bearer prefix
    const token = cookies.AuthorizationToken.split(" ")[1];

    try {
      const jwtUser = jwt.verify(token, JWT_ACCESS_TOKEN);

      if (typeof jwtUser === "string") {
        throw new Error("Something went wrong");
      }

      const user = await fetch(`http://localhost:3000/user${jwtUser.login}`);
      const response = await user.json();
      
      const sessionUser: User = {
        id: jwtUser.id,
        login: jwtUser.login,
        password: response.password,
        first_name: response.first_name,
        last_name: response.last_name,
        father_name: response.father_name,
        age: response.age,
        email: response.email,
        image: response.image
      };
      
      event.locals.user = sessionUser;
    } catch (error) {
      console.error(error);
    }
  }
  return await resolve(event);
};