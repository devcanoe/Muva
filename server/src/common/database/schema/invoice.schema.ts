import { Schema, model } from "mongoose";
import Invoice from "../model/invoice.model";

const invoiceSchema: Schema = new Schema<Invoice>({
    booking: {
        type: Schema.Types.ObjectId,
        ref: 'booking',
        required: [ true, "booking is required"]
    },
    total: {
        type: Number,
        required: [true, "Total cost is required"]
    },
    details: [new Schema({
        seat_type: String,
        number_of_seat: Number,
        cost: Number
    })],
    created_at: {
        type: Date,
        default: Date.now,
      },
    updated_at: Date,
});

export default model<Invoice>("invoice", invoiceSchema);