const app  = require('../../app')
const db = require('../models')
const supertest = require('supertest');

describe("get Kpis information", () => {
  let thisDb = db

describe("GET /api/kpi1", () => {
    it("should return all kpi1", async () => {
      const res = await supertest(app).get('/api/kpi1');

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /api/kpi2", () => {
    it("should return all kpi2", async () => {
      const res = await supertest(app).get('/api/kpi2');

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });


  // After all tests have finished, close the DB connection
  afterAll(async () => {
    await thisDb.sequelize.close()
  })
})
