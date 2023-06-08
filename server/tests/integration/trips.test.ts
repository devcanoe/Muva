import request from "supertest";
import app from "../../src";

const tripId = 
describe("Trip Services", () => {
  describe("Get Trips", () => {
    it("When Get all Trips", () => {
        request(app).get("/api/v1/trips/all").expect(200);
    });
  });
  describe("Get Single Trip", () => {
      it("When Get Single Trip", () => {
        request(app).get(`/api/v1/trips/${tripId}`).expect(400)
    });
  });
});
