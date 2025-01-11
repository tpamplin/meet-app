import puppeteer from "puppeteer";

describe("Show/hide an event details", () => {
    test("An event element is collapsed by default", async () => {
        const browser = await puppeteer.launch();

        const page = await browser.newPage();
        await page.goto("http://localhost:5173/");

        await page.waitForSelector(".event");

        const eventDetails = await page.$(".event .details");
        expect(eventDetails).toBeNull();
        await browser.close();
    });
});
