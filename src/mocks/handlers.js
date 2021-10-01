import { rest } from "msw";
import companies from "./data/companies.json";
import items from "./data/items.json";

const arrayMerge = (arr) => {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? arrayMerge(toFlatten) : toFlatten
    );
  }, []);
};

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

const allRow = { label: "All", key: -1, itemCount: items.length };

export const handlers = [
  rest.get("/api/companies", (req, res, ctx) => {
    let result = companies.map((company) => ({
      ...company,
      label: company.name,
      key: company.slug,
      itemCount: items.filter((item) => item.manufacturer === company.slug)
        .length,
    }));
    return res(ctx.json([allRow, ...result]));
  }),
  rest.get("/api/items", (req, res, ctx) => {
    return res(ctx.json(items));
  }),
  rest.get("/api/get-tag-list", (req, res, ctx) => {
    const tags = arrayMerge(items.map((item) => item.tags)).filter(onlyUnique);
    let result = tags.map((tag) => ({
      label: tag,
      key: tag,
      itemCount: items.filter(
        (item) => item.tags.filter((itemTag) => itemTag === tag).length > 0
      ).length,
    }));
    return res(ctx.json([allRow, ...result]));
  }),
];
