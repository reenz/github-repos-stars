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

  it("should respond with title", (done) => {
    chai.request(app)
    .get("/")
    .end((err, res) => {
      res.text.should.contain("Compute Stars");
      done();
    });
  });
  it("should respond with status 200 when user enters the github user and repo", (done) => {
    const user = "makersacademy";
    const repo = "/bowling-challenge" ;
    chai.request(app)
    .get(`/${user}${repo}`)
    .end((err, res) => {
      should.not.exist(err);
      res.status.should.equal(200);
      done();
    });
  });
});
