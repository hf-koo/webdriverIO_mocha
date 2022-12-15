// https://practice.automationbro.com/

describe("Home", () => {
  it("Open URL & assert title", async () => {
    //Open URL
    await browser.url("https://practice.automationbro.com/");

    // Assert title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    );
  });

  it("Open URL & assert URL", async () => {
    //Open URL
    await browser.url("https://practice.automationbro.com/about/");

    // Assert title
    await expect(browser).toHaveUrl(
      "https://practice.automationbro.com/about/"
    );
  });
});
