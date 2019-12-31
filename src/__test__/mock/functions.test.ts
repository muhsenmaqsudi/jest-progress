function forEach(items: number[], callback: jest.Mock) {
  for (let index = 0; index < items.length; index++) {
    // console.log(items, index, callback.mockName);
    callback(items[index]);
  }
}

test("testing forEach mock function", () => {
  const mockCallback = jest.fn(x => 42 + x);

  forEach([0, 1, 2], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(3);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  expect(mockCallback.mock.calls[2][0]).toBe(2);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
  expect(mockCallback.mock.results[1].value).toBe(43);
  expect(mockCallback.mock.results[2].value).toBe(44);
});
