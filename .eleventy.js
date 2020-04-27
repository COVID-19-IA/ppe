const dayjs = require("dayjs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/**/*.(png|jpg|svg|webp|pdf)");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addWatchTarget("./src/");

  // filter
  eleventyConfig.addNunjucksFilter("dateFormat", (v) => {
    return dayjs(v).format("YYYY年MM月DD日 HH:mm");
  });

  // filter
  eleventyConfig.addNunjucksFilter("dateISOFormat", (v) => {
    return dayjs(v).format("YYYY-MM-DDTHH:mmZ");
  });

  // filter
  eleventyConfig.addNunjucksFilter("cacheBuster", (v) => {
    return `?${v.getTime()}`
  });

  // browser-sync option
  eleventyConfig.setBrowserSyncConfig({
    startPath: "/ppe/"
  });

  return {
    dir: { input: "src", output: "docs" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "html", "yml"],
    htmlTemplateEngine: "njk",
  };
};
