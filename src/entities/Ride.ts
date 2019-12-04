import {
    Column,
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    ManyToOne,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { rideStatus } from "src/types/types";
import User from "./User";
import Chat from "./Chat";

@Entity()
class Ride extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text",
        enum: ["ACCEPTED", "FINISHED", "CANCELED", "REQUESTING", "ONROUTE"],
        default: "REQUESTING"
    })
    status: rideStatus

    @Column({ type: "text" })
    pickUpAddress: string;

    @Column({ type: "double precision", default: 0 })
    pickUpLat: number;

    @Column({ type: "double precision", default: 0 })
    pickUpLng: number;

    @Column({ type: "text" })
    dropOffAddress: string;

    @Column({ type: "double precision", default: 0 })
    dropOffLat: number;

    @Column({ type: "double precision", default: 0 })
    dropOffLng: number;

    @Column({ type: "double precision", default: 0 })
    price: number;

    @Column({ type: "text" })
    distance: string;

    @Column({ type: "text" })
    duration: string

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @Column({ nullable: true })
    passengerId: number;

    @Column({ nullable: true })
    driverId: number;

    @ManyToOne(type => User, user => user.rideAsPassenger)
    passenger: User;

    @ManyToOne(type => User, user => user.rideAsDriver, { nullable: true })
    driver: User;

    @Column({ nullable: true })
    chatId: number;

    @OneToOne(type => Chat, chat => chat.ride, { nullable: true })
    @JoinColumn()
    chat: Chat;
}
export default Ride;