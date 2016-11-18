// describe("基础测试用例", function() {
//     it("测试增加点赞", function() {
//         expect(window.add(1)).toBe(2);
//     });
// });

var expect = chai.expect;
describe("基础单元测试", function() {
  it('数字自增1', function () {
    expect(2).to.equal(test.add(1));
  })
})
