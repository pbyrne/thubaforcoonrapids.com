import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    fixOrientation: true, // Fixes that EXIF-defined orientation was lost, flipping some images
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
  });
};
