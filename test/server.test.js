const app = require('../lib/server');
const request = require("supertest");

describe("Unit test for server", () => {
  test("GET /v1/explorers/:mission", (done) => {
      request(app)
        .get("/v1/explorers/node")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body[0].name).toBe("Woopa1");
            expect(res.body[0].githubUsername).toBe("ajolonauta1");
            expect(res.body[0].score).toBe(1);
            expect(res.body[0].mission).toBe("node");
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        })
    })

    test("GET /v1/explorers/amount/:mission", (done) => {
        request(app)
          .get("/v1/explorers/amount/node")
          .expect("Content-Type", /json/)
          .expect(200)
          .expect((res) => {
              expect(res.body.mission).toBe("node");
              expect(res.body.quantity).toBe(10);
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })

      test("GET /v1/explorers/usernames/:mission", (done) => {
        request(app)
          .get("/v1/explorers/usernames/node")
          .expect("Content-Type", /json/)
          .expect(200)
          .expect((res) => {
              expect(res.body.mission).toBe("node");
              expect(res.body.names[0]).toBe("ajolonauta1");
              expect(res.body.names[1]).toBe("ajolonauta2");
              expect(res.body.names[2]).toBe("ajolonauta3");
              expect(res.body.names[3]).toBe("ajolonauta4");
              expect(res.body.names[4]).toBe("ajolonauta5");
              expect(res.body.names[5]).toBe("ajolonauta11");
              expect(res.body.names[6]).toBe("ajolonauta12");
              expect(res.body.names[7]).toBe("ajolonauta13");
              expect(res.body.names[8]).toBe("ajolonauta14");
              expect(res.body.names[9]).toBe("ajolonauta15");
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })

     /** test("Post /v1/explorers", (done) => {
        request(app)
          .post("/v1/explorers")
          .expect("Content-Type", /json/)
          .send({body:"Cliente_Nuevo"})

          .expect(201)
          .expect((res) => {
              expect(res.body.message).toBe("Created")
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })

      test("Put /v1/explorers/:id", (done) => {
        request(app)
          .put("/v1/explorers/1")
          .expect("Content-Type", /json/)
          .send({name:"Juan"})
          .expect(200)
          .expect((res) => {
              expect(res.body.message).toBe("Updated!")
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })

      test("Delete /v1/explorers/:id", (done) => {
        request(app)
          .delete("/v1/explorers/1")
          .expect("Content-Type", /json/)
          .expect(200)
          .expect((res) => {
              expect(res.body.message).toBe("Deleted!")
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })*/
})