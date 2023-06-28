import { Schema } from "mongoose";
import Base from "./base.model";

export interface InvoiceDetail {
    seat_type: string;
    number_of_seat: number;
    cost: number
}

export default interface Invoice extends Base {
    booking: Schema.Types.ObjectId;
    details: InvoiceDetail[];
    total: number;
}