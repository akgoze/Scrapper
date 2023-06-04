import { parseHTML, fetchURLMeta } from "../src/modules/parsers";
import { expect } from "@jest/globals";

describe("parseHTML", () => {
  it("should return a Meta object for a valid HTML", async () => {
    const html = `
      <html>
        <head>
          <title>Test Title</title>
          <meta name="description" content="Test Description" />
          <meta property="og:image" content="Test Image" />
          <meta property="og:url" content="Test URL" />
        </head>
        <body></body>
      </html>`;

    const expectedMeta = {
      title: "Test Title",
      description: "Test Description",
      image: "Test Image",
      url: "Test URL",
    };
    expect(parseHTML(html)).toEqual(expectedMeta);
  });

  it("should return an empty Meta object for an invalid HTML", async () => {
    const html = `
      <html>
        <head></head>
        <body></body>
      </html>`;

    const expectedMeta = {
      title: "",
      description: "",
      image: "",
      url: "",
    };
    expect(parseHTML(html)).toEqual(expectedMeta);
  });
});

describe("fetchURLMeta", () => {
  it("should return a Meta object for a valid URL", async () => {
    const url = "https://akgoze.dev";
    const expectedMeta = {
      title: "Fatih Akgöze - Frontend Engineer",
      description: "Hello. My name is Fatih Akgöze. I'm Frontend Engineer.",
      image: "https://akgoze.dev/Assets/Images/share-image.png",
      url: "https://akgoze.dev",
    };
    expect(await fetchURLMeta(url)).toEqual(expectedMeta);
  });

  it("should return an error message for an invalid URL", async () => {
    const url = "https://akgoze.dev/invalid";
    const expectedMessage = "Invalid URL";
    expect(await fetchURLMeta(url)).toEqual(expectedMessage);
  });
});
