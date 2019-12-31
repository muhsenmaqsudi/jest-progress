const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce("x")
  .mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true

test("testing return values of filter", () => {
  const filterTestFn = jest.fn();

  filterTestFn
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true);

  const result = [11, 12, 13].filter(num => filterTestFn(num));

  console.log(result);

  console.log(filterTestFn.mock.calls);
});

test("testing mock with only return values", () => {
  const myMockFn = jest.fn();

  myMockFn
    .mockReturnValue("default")
    .mockReturnValueOnce("first call")
    .mockReturnValueOnce("second call");

  // 'first call', 'second call', 'default', 'default'
  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
});
