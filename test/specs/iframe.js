describe("IFrame", () => {
  it("Working with iframe", async () => {
    //Open URL
    await browser.url("https://practice.automationbro.com/iframe-sample/");

    // access the iframe
    const iframe = await $("#advanced_iframe");
    await browser.switchToFrame(iframe);

    // vertify logo exist
    await expect($("#site-logo")).toExist();

    // switch to parent frame
    await browser.switchToParentFrame();

    // vertify page title
    await expect($("h1.tg-page-header__title")).toHaveText("IFrame Sample");
  });
});
