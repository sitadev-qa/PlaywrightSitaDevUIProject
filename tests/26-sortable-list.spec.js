// Sortable list: reorder items with drag and drop
// Site: https://jqueryui.com/sortable/
const { test, expect } = require('@playwright/test');

test('move "Item 1" below "Item 3"', async ({ page }) => {
  await page.goto('https://jqueryui.com/sortable/');
  const frame = page.frameLocator('iframe.demo-frame');
  const items = frame.locator('#sortable li');

  const initial = (await items.allInnerTexts()).map(t => t.trim());
  expect(initial[0]).toBe('Item 1');

  const src = await items.nth(0).boundingBox();
  const dst = await items.nth(2).boundingBox();

  await page.mouse.move(src.x + src.width / 2, src.y + src.height / 2);
  await page.mouse.down();
  await page.mouse.move(dst.x + dst.width / 2, dst.y + dst.height, { steps: 20 });
  await page.mouse.up();

  const after = (await items.allInnerTexts()).map(t => t.trim());
  console.log('Before:', initial, '\nAfter: ', after);
  expect(after.indexOf('Item 1')).toBeGreaterThan(0);
  expect(after).toHaveLength(initial.length);
});
