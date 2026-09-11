import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: 'Admin' }).click();
//   await page.getByRole('button', { name: ' Add' }).click();
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
//   await page.getByText('-- Select --').first().click();
//   await page.getByRole('option', { name: 'Admin' }).click();
//   await page.getByText('-- Select --').click();
//   await page.getByRole('option', { name: 'Enabled' }).click();
//   await page.getByRole('textbox', { name: 'Type for hints...' }).click();
//   await page.getByRole('textbox', { name: 'Type for hints...' }).fill('em');
//   await page.getByRole('option', { name: 'Emily Jones' }).click();
//   await page.getByRole('textbox').nth(2).click();
//   await page.getByRole('textbox').nth(2).fill('demo1212');
//   await page.getByRole('textbox').nth(3).click();
//   await page.getByRole('textbox').nth(3).fill('demo1212');
//   await page.getByRole('textbox').nth(3).press('Tab');
//   await page.getByRole('textbox').nth(4).click();
//   await page.getByRole('textbox').nth(4).fill('demo1212');
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
//   await expect(page.getByText('Emily Jones')).toBeVisible();
//   await page.locator('div:nth-child(2) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)').click();
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.locator('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').first().click();
//   await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
//   await page.getByRole('button', { name: ' Yes, Delete' }).click();
// });

test('Crud Operation on User Management - Save, Update and Delete', async ({ page }) => {
  //Test Data - Data being used for Testing Purpose
  const user = {
    userRole: 'ESS',
    employeeName: 'Thomas Kutty Benny',
    username: 'demo1212',
    status: 'Enabled',
    password: 'demo1212',
  };
  
  // ------------------------------------------------Register a User------------------------------------------------------------
  await test.step('Register a User and save the data', async () => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByText('-- Select --').first().click();
    await page.getByRole('option', { name: user.userRole }).click();
    await page.getByText('-- Select --').click();
    await page.getByRole('option', { name: user.status }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill(user.employeeName);
    await page.getByRole('option', { name: user.employeeName }).click();
    let valTimestamp = Date.now();
    user.username = user.username + valTimestamp;
    await page.getByRole('textbox').nth(2).fill(user.username);
    await page.getByRole('textbox').nth(3).fill(user.password);
    await page.getByRole('textbox').nth(4).fill(user.password);
    await page.getByRole('button', { name: 'Save' }).click();
    
  })

  // ------------------------------------------------Update the User------------------------------------------------------------

  await test.step('Delete the User and Save the data', async () => {

    // demo12121789135787088 is created and now we need to identify the row and perform the delete flow for that user in UI

   //[role="rowgroup"] - It is highlighting all the data which got created
   //[class="oxd-table-card"] - It is highlighting all the rows which are present
   //[class="oxd-table-card"] - I need to go to the row where Username = demo12121789135787088 and then click on the delete button
   await page.waitForTimeout(4000);
   // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    const rows = await page.$$('div[role="rowgroup"] div[class="oxd-table-card"]');
    //Difference between $$ and $ is that $$ returns an array of elements, while $ returns the first matching element. In this case, we want to get all the rows, so we use $$ to get an array of row elements.
    // Loop through each row to find the one with the matching username
    for (const row of rows) {
      const usernameCell = await row.$('div[class="oxd-table-cell oxd-padding-cell"]:nth-child(2)');
      const usernameText = await usernameCell?.innerText();
      console.log(usernameText);
      if (usernameText === user.username) {
        // Found the matching row, now click the delete button
        const deleteButton = await row.$('[type="button"]').nth(0);
        await deleteButton?.click();
        break; // Exit the loop after deleting the user
      }
    }
  })
})