import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity("surveys_users")
class SurveyUser {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: string;

    @Column()
    survey_id: string;

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
} 

export { SurveyUser };