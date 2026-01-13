// 定义Person接口格式
// 分别暴露
export interface PersonInter {
  id: number,
  name: string,
  age: number,
}

// 自定义类型格式
// 分别暴露
export type Persons = Array<PersonInter>
// or以下这种写法
// export type Persons = PersonInter[]
