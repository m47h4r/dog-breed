import { rest } from "msw";

import config from "../config";

export const handlers = [
  rest.get("*/api/breeds/list/all", (req, res, ctx) => {
    return res(ctx.json({ message: {} }));
  }),
  rest.get("*/api/breed/*/images", (req, res, ctx) => {
    return res(ctx.json({ message: {} }));
  }),
];
