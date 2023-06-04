import request from "supertest";
import app from "../src/index";

import { expect } from "@jest/globals";

describe("GET /", () => {
  it('should return "Hello World!" on GET /', async () => {
    const res = await request(app).get("/");

    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello World!");
  });
});

describe("GET /scrapper", () => {
  it("should return meta data on GET /scrapper", async () => {
    const response = await request(app)
      .get("/scrapper")
      .query({ url: "https://akgoze.dev" });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      title: "Fatih Akgöze - Frontend Engineer",
      description: "Hello. My name is Fatih Akgöze. I'm Frontend Engineer.",
      image: "https://akgoze.dev/Assets/Images/share-image.png",
      url: "https://akgoze.dev",
    });
  });
});
