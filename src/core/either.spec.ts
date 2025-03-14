import { left, right, type Either } from "./either";

function doSomething(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(10);
  } else {
    return left("error");
  }
}

test("success result", () => {
  const result = doSomething(true);

  expect(result.isRight()).toBe(true);
});
test("error result", () => {
  const result = doSomething(false);

  expect(result.isLeft()).toBe(true);
});
