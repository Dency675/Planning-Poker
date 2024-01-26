import { Model } from 'sequelize';

    class SessionParticipants extends Model {

  public id!: number;
  public session_id!: number;
  public user_id!: string;
  public user_type!: 'Guest' | 'Developer' | 'Scrum Master';

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

export default SessionParticipants;