function addAsync(a: number, b: number, callback: Function) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
}

test("add numbers async", (done: jest.DoneCallback) => {
  addAsync(10, 5, (result: number) => {
    expect(result).toBe(15);
    done();
  });
});
