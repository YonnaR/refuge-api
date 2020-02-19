import { IObservableValue } from '../ObservableValue';
import {
    Document, Model, Schema, model
} from 'mongoose';

export interface IRoomReservation extends Document,IObservableValue {
    firstName: string;
    lastName: string;
    startDate :string;
    endDate :string;
    mail :string;
    tel :string;
    adults :number;
    childrens :number;
    message :string;
}

interface IRoomReservationModel extends Model<IRoomReservation> { }

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    startDate :{ type: String, required: true },
    endDate :{ type: String, required: true },
    mail :{ type: String, required: true },
    tel :{ type: String, required: true },
    adults :{ type: Number, required: true },
    childrens :{ type: Number, required: true },
    message :{ type: String, required: false },
    created :{ type :String, required :true },
    updated :{ type :String, require :true }
});

const RoomReservation: IRoomReservationModel = model<IRoomReservation, IRoomReservationModel>('RoomReservation', schema);

export default RoomReservation;