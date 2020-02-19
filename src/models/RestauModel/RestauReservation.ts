import {
    Document, Model, Schema, model
} from 'mongoose';
import { IObservableValue } from '../ObservableValue';

export interface IRestauReservation extends Document,IObservableValue {
    firstName: string;
    lastName: string;
    date :string;
    mail :string;
    tel :string;
    reservationHour :string;
    couverts :number;
    message? :string;
}

interface IRestauReservationModel extends Model<IRestauReservation> { }

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    date :{ type: String, required: true },
    mail :{ type: String, required: true },
    tel :{ type: String, required: true },
    reservationHour :{ type: String, required: true },
    couverts :{ type: Number, required: true },
    message :{ type: String, required: true },
});

const RestauReservation: IRestauReservationModel = model<IRestauReservation, IRestauReservationModel>('RestauReservation', schema);

export default RestauReservation;
