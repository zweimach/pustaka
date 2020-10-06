import "core-js/stable";
import "regenerator-runtime/runtime";

describe("ESM Browser", () => {
  beforeEach(async () => {
    await page.goto(`${PATH}/index-no-esm.html`, { waitUntil: "load" });

    page.on("console", (consoleObj) => {
      if (consoleObj.type() === "log") {
        console.log(consoleObj.text());
      }
    });
  });

  test("test HTML title", async () => {
    await expect(page.title()).resolves.toMatch(
      "Test Kalender Jawa Browser IIFE version"
    );
  });

  
});
