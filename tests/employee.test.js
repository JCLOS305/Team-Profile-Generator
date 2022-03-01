const Employee = require("../lib/Employee");

test("new employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("creates employee name", () => {
  const name = "Jeancarlos";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("creates employee id", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("creates employess email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("retrieves name through getName()", () => {
  const testValue = "Jeancarlos";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("retrieves ID through getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("retrieves email through getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Jeancarlos", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});