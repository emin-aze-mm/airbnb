/** @format */

import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createAt" | "updateAt" | "emailVerified"
> & {
  createAt: string;
  updateAt: string;
  emailVerified: string | null;
};
