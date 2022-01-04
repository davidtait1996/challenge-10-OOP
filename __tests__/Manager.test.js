const Manager = require('../lib/Manager');

test('creates a manager object', () => {
  const manager = new Manager("David", 10, "david.tait.96@gmail.com", 100);

  expect(manager.name).toBe("David");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.stringContaining(manager.email.toString()));
  expect(manager.office).toEqual(expect.any(Number));
});

test('gets a manager\'s role', () => {
  const manager = new Manager("David", 10, "david.tait.96@gmail.com", 100);

  expect(manager.getRole()).toBe("Manager");
});