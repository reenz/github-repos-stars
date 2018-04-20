const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);
const app = require("../app")

describe("Index page", () => {
  it("should respond with status 200", (done) => {
    chai.request(app)
    .get("/")
    .end((err, res) => {
      should.not.exist(err);
      res.status.should.equal(200);
      done();
    });
  });
});

