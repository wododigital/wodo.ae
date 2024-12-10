const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");
const slugs = require("./react-snap.config").routes;

function writeSitemap() {
  // An array with your links
  const links = [
    ...slugs.map((slug) => ({
      url: slug,
      changefreq: "weekly",
      priority: 0.8,
    })),
  ];
  // Create a stream to write to
  const stream = new SitemapStream({ hostname: "https://wodo.ae" });
  return streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
    return data.toString();
  });
}
writeSitemap().then((res, rej) => {
  fs.writeFileSync("./public/sitemap.xml", res);
});
// const siteMaps = writeSitemap();

// Return a promise that resolves with your XML string
