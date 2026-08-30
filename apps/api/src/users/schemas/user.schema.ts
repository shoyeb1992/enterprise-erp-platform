import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({
  collection: "users",
  timestamps: false,
})
export class User {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
    index: true,
  })
  username: string;

  @Prop({
    type: String,
    index: true,
  })
  email: string;

  @Prop({
    type: String,
  })
  password: string;

  @Prop({
    type: String,
  })
  org_password: string;

  @Prop({
    type: String,
  })
  phone_no: string;

  @Prop({
    type: String,
    default: "0",
  })
  member_id: string;

  @Prop({
    type: String,
    default: "0",
  })
  send_email: string;

  @Prop({
    type: String,
    default: "0",
  })
  hide_client: string;

  @Prop({
    type: String,
    default: "0",
  })
  user_role: string;

  @Prop({
    type: String,
    default: "0",
  })
  fms_user_right: string[];

  @Prop({
    type: String,
    default: "1",
  })
  user_status: string;

  @Prop({
    type: String,
    default: "",
  })
  last_login: string;

  @Prop({
    type: Date,
  })
  updated_at: Date;

  @Prop({
    type: Date,
  })
  created_at: Date;

  @Prop({
    type: String,
  })
  remember_token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
