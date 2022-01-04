const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern("David", 10, "david.tait.96@gmail.com", "BYU");

  expect(intern.name).toBe("David");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.stringContaining(intern.email.toString()));
  expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets a intern\'s school', () => {
  const intern = new Intern("David", 10, "david.tait.96@gmail.com", "BYU");

  expect(intern.getSchool()).toBe("BYU");
});

test('gets a intern\'s role', () => {
  const intern = new Intern("David", 10, "david.tait.96@gmail.com", "BYU");

  expect(intern.getRole()).toBe("Intern");
});