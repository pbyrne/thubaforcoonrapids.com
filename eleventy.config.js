import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
  });
};
