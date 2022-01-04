const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
  const engineer = new Engineer("David", 10, "david.tait.96@gmail.com", "davidtait1996");

  expect(engineer.name).toBe("David");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.stringContaining(engineer.email.toString()));
  expect(engineer.github).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets a engineer\'s github', () => {
  const engineer = new Engineer("David", 10, "david.tait.96@gmail.com", "davidtait1996");

  expect(engineer.getGithub()).toBe("davidtait1996");
});

test('gets a engineer\'s role', () => {
  const engineer = new Engineer("David", 10, "david.tait.96@gmail.com", "davidtait1996");

  expect(engineer.getRole()).toBe("Engineer");
});