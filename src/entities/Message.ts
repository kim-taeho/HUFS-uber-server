import {
    Column,
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";

import Chat from "./Chat";
import User from "./User";

@Entity()
class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Chat, chat => chat.messages)
    chat: Chat;

    @Column({nullable: true})
    userId: number;
    
    @ManyToOne(type => User, user => user.messages)
    user: User;

    @Column({ type: "text" })
    text: string;

    @Column({ nullable: true })
    chatId: number;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
export default Message;