import { Entity, PrimaryGeneratedColumn , Column} from 'typeorm'

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;
   
   @Column()
   name: string

   @Column ({ type: 'varchar', length: 255, nullable: true })
   email: string;

   @Column({nullable: true})
   address: string;
   
}