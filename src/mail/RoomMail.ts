import { IRoomReservation } from './../models/RoomModel/RoomReservation';
import Transporter from './transporter'
import { isError } from 'util';
export default class RoomMail{
    private reserv :IRoomReservation;


    constructor(reserv :IRoomReservation){
        this.reserv = reserv;
    }

    private buildAdminSubject() :string{
        const {created} = this.reserv;
        return`Nouvelle réservation de gîte le ${created}`
    }
    private buildAdminMail() :string{
        const { firstName, lastName, startDate, endDate, adults, childrens, tel, mail, created} = this.reserv
        return `
            Nouvelle reservation de ${ firstName +' '+ lastName} le ${created}.
            Pour ${adults} adultes et ${childrens} enfants, du ${startDate} au ${endDate}.
            Le client reste joignable par téléphone au : ${tel} ou par mail au : ${mail}
        `
    }
    private sendAdminMail() :Error|null{
        let transporter = Transporter()
        if (isError(transporter)){
            return transporter;
        }
        transporter.sendMail({
            from:this.reserv.mail,
            to:'refugehulman@gmail.com',
            subject:this.buildAdminSubject(),
            text:this.buildAdminMail()
        },(error, info)=>{
            if (error) return error;
            return null
        })
    }

    private buildClientSubject() :string{
        const {created} = this.reserv;
        return`Votre réservation chez Le Refuge du ${created} est en cours de validation`
    }
    private buildClientMail() :string{
        const {firstName, lastName, startDate, endDate} = this.reserv
        return `
            Bonjour Madame, Monsieur ${ firstName +' '+ lastName} et merci pour votre réservation au Refuge.
            Nous avons bien reçut votre demande de réservation du ${startDate} au ${endDate}.
            Elle sera traité dans les plus brefs délais.
            Nous restons joignable par téléphone au : (+590) 590-97-0502.
        `
    }
    private sendClientMail() :Error|null{
        let transporter = Transporter()
        if (isError(transporter)){
            return transporter;
        }
        transporter.sendMail({
            from:'refugehulman@gmail.com',
            to:this.reserv.mail,
            subject:this.buildClientSubject(),
            text:this.buildClientMail()
        },(error, info)=>{
            if (error) return error;
            return null
        })
    }

    public send(){
        return {
            admin : this.sendAdminMail()?.message,
            client: this.sendClientMail()?.message
        }
    }

}