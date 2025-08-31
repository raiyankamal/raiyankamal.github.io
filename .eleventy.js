module.exports = function (eleventyConfig) {

  eleventyConfig.addCollection("notes", collection => {
    return collection.getFilteredByGlob("src/notes/*.md");
  });

  // Make a collection of all unique tags
  eleventyConfig.addCollection("allTags", function (collectionApi) {
    let tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        if (typeof tags === "string") { tags = [tags]; }
        tags.forEach(tag => tagSet.add(tag));
      }
    });
    return [...tagSet];
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};