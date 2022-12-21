import HomePage from "../pages/home-page";

describe("Home", () => {
  // before(async () => {
  //   console.log("This could be used for test setup");
  // });

  beforeEach(async () => {
    console.log("This runs before each test");

    //Open URL
    await HomePage.open();
  });

  // after(async () => {
  //   console.log("This could be used for test cleanup");
  // });

  // afterEach(async () => {
  //   console.log("This runs after each test");

  //   //Open URL
  //   await HomePage.open();
  // });

  it("Open URL & assert title", async () => {
    before(async () => {
      console.log("This could be used for test setup");
    });

    // Assert title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    );
  });

  it("Open About Page & assert URL", async () => {
    //Open URL
    await browser.url("https://practice.automationbro.com/about/");

    // Assert title
    await expect(browser).toHaveUrl(
      "https://practice.automationbro.com/about/"
    );
  });

  it("Click get started btn & assert url contains get-started text", async () => {
    //Click get started button
    // await $("#get-started").click();
    await HomePage.btnGetStarted.click();

    // Assert url contains get-started text
    await expect(browser).toHaveUrlContaining("get-started");
  });

  it("Click logo && assert url DOES NOT contains get-started text", async () => {
    //Open URL
    await browser.url("https://practice.automationbro.com/about/");

    //Click logo
    // await $('//img[@alt="Practice E-Commerce Site"]').click();
    await HomePage.imageLogo.click();

    // Assert url does not contains get-started text
    await expect(browser).not.toHaveUrlContaining("get-started");
  });

  it("Find heading element & assert the text", async () => {
    //find heading element
    // const headingEl = await $(".elementor-widget-container h1");
    const headingEl = await HomePage.txtHeading;

    //get the text
    const headingText = await headingEl.getText();

    // Assert the text
    // await expect(headingText).toEqual("Think different. Make different.");
    await expect(headingEl).toHaveText("Think different. Make different.");
  });
});
