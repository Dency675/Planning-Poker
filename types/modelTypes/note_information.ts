import { Model } from "sequelize";

class NoteInformation extends Model{
  public id?: number;
  public note_title!: string;
  public content!: string;
  public createdAt?: Date;
  public updatedAt?: Date;
}

export default NoteInformation;
