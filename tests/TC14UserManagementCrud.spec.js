import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByText('-- Select --').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('em');
  await page.getByRole('option', { name: 'Emily Jones' }).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('demo1212');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('demo1212');
  await page.getByRole('textbox').nth(3).press('Tab');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('demo1212');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  await expect(page.getByText('Emily Jones')).toBeVisible();
  await page.locator('div:nth-child(2) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').first().click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();
});

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
    await page.getByRole('textbox').nth(2).fill(user.username);
    await page.getByRole('textbox').nth(3).fill(user.password);
    await page.getByRole('textbox').nth(4).fill(user.password);
    await page.getByRole('button', { name: 'Save' }).click();
    
  })

  // ------------------------------------------------Update the User------------------------------------------------------------

  await test.step('Delete the User and Save the data', async () => {

   
  })
})