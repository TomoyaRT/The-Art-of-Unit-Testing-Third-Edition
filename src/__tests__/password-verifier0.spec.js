const verifyPassword = (input, rules) => {
  const errors = [];

  rules.forEach((rule) => {
    const result = rule(input);
    if (!result.passed) {
      errors.push(`error ${result.reason}`);
    }
  });

  return errors;
};

/** U.S.E */
// Unit under test (正在測試的工作單位)
// Scenario (單元測試的情景或輸入)
// Expectation (預期的行為或退出點)

const U = "verifyPassword";
const S = "Given a failing rule";
const E = "returns errors";
test(`${U} . ${S} . ${E}`, () => {
  /** AAA */
  // Arrange (安排/準備)
  // Act (行為)
  // Assert (斷言)

  const fakeRule = (input) => ({ passed: false, reason: "fake reason" });

  const errors = verifyPassword("any value", [fakeRule]);

  expect(errors[0]).toMatch("fake reason");
});
