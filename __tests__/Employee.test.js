const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee("David", 0, "david.tait.96@gmail.com");

  expect(employee.name).toBe("David");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets name from employee', () => {
  const employee = new Employee("David", 0, "david.tait.96@gmail.com");

  expect(employee.getName()).toBe("David");

});

test('gets ID from employee', () => {
  const employee = new Employee("David", 10, "david.tait.96@gmail.com");

  expect(employee.getId()).toBe(10);

});

test('gets email from employee', () => {
  const employee = new Employee("David", 10, "david.tait.96@gmail.com");

  expect(employee.getEmail()).toBe("david.tait.96@gmail.com");

});

test('gets role from employee', () => {
  const employee = new Employee("David", 10, "david.tait.96@gmail.com");

  expect(employee.getRole()).toBe("Employee");

});