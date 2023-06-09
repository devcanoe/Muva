import request from "supertest";
import app from "../../src";
import mongoose from "mongoose";

const tripId = new mongoose.Types.ObjectId().toString();

const tripPayload = {
  _id: tripId,
  departure_location: "PHC",
  arrival_location: "LAG",
  departure_time: new Date("2023-06-10T13:31:07.674Z"),
  arrival_time: new Date("2023-06-12T13:31:07.674Z"),
  trip_date: new Date("2023-06-10T10:31:07.674Z"),
  seat_cost: 20,
  capacity: 14,
  vehicle: "CAR",
};

describe("Trip Services", () => {
  describe("Get Trips", () => {
    it("When Get all Trips", async () => {
      await request(app).get("/api/v1/trip/all").expect(200);
    });
  });
  describe("Get Single Trip", () => {
      it("When Single Trip Exists", async () => {
      await request(app).get(`/api/v1/trip/${tripId}`).expect(200);
    });
  });
  it("When Single Trip Does not Exist", async () => {
    const newTrip = "Trip-123";
    const { statusCode } = await request(app).get(`/api/v1/trip/${newTrip}`);
    expect(statusCode).toBe(404);
  });
});
