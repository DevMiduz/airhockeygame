import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import boundaries from "./images/boundaries.png";
import center_line from "./images/center_line.png";
import green_goal from "./images/green_goal.png";
import green_goal_area from "./images/green_goal_area.png";
import green_pusher from "./images/green_pusher.png";
import red_goal from "./images/red_goal.png";
import red_goal_area from "./images/red_goal_area.png";
import red_pusher from "./images/red_pusher.png";
import puck from "./images/puck.png";


export const Resources = {
  Sword: new ImageSource(sword),
  Boundaries: new ImageSource(boundaries),
  CenterLine: new ImageSource(center_line),
  GreenGoal: new ImageSource(green_goal),
  GreenGoalArea: new ImageSource(green_goal_area),
  GreenPusher: new ImageSource(green_pusher),
  RedGoal: new ImageSource(red_goal),
  RedGoalArea: new ImageSource(red_goal_area),
  RedPusher: new ImageSource(red_pusher),
  Puck: new ImageSource(puck),
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
