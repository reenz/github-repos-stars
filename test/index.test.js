const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);
const app = require("../app")
const nock = require("nock");

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
    const user = "user";
    const repo = "/testRepo" ;
    nock("https://api.github.com/repos")
    .get(`/${user}${repo}`)
    .reply(200)
    chai.request(app)
    .get(`/${user}${repo}`)
    .end((err, res) => {
      should.not.exist(err);
      res.status.should.equal(200);
      done();
    });
  });
});
