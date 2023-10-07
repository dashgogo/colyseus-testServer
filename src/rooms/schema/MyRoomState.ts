//tutorial-babylonjs-server-mainよりコピー
import { MapSchema, Schema, type } from "@colyseus/schema";

export class Player extends Schema {

    @type("number") x: number;
    @type("number") y: number;
    @type("number") z: number;
}

export class MyRoomState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
}

/*　//元のTemplateデータ
import { Schema, Context, type } from "@colyseus/schema";

export class MyRoomState extends Schema {

  @type("string") mySynchronizedProperty: string = "Hello world";

}
*/