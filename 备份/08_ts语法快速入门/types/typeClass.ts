// 自定义类型
import { Gender } from "./enumclass";   
type Grade = 1|2|3;
type Student = {name:string,age:number,gender:Gender,grade:Grade};
export type { Student };