// 引入mitt
import mitt from "mitt";
// 引入事件类型
import { type EventsMap } from "@/types/events";
// 创建mitt实列
const emitter = mitt<EventsMap>()

// 暴露mitt实例
export {emitter};