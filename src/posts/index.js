const posts = Object.entries({
  "2021-05-18.testing": require("./2021-05-18.testing.md"),
  "2021-05-19.on-blogging": require("./2021-05-19.on-blogging.md"),
  "2021-05-21.oauth-in-nodejs": require("./2021-05-21.oauth-in-nodejs.md"),
}).map(([fp, { data, content }]) => {
  const [date, slug] = fp.split(".");

  data.date = date;
  data.slug = `/${slug}`;
  data.title =
    data.title ||
    fp
      .split(".")
      .pop()
      .split("-")
      .map((s) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`)
      .join(" ");

  return { content, data };
});

export default posts;
