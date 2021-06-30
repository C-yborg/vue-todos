import Mock, { mock } from "mockjs"
let Todos = [] //定义我们需要的数据
const COUNT = [1, 2, 3, 4, 5] //数据长度
for (let i = 1; i <= COUNT.length; i++) {
    Todos.push(
        Mock.mock({
            id: Mock.Random.guid(),
            title: Mock.Random.first(),
            isDelete: false, //是否删除
            locked: Mock.Random.boolean(),
            record: COUNT.map(() => {
                //代办单项列表的数据
                return {
                    text: Mock.Random.cparagraph(2),
                    isDelete: false,
                    checked: Mock.Random.boolean(), //是否完成
                }
            }),
        })
    )
}

export { Todos }
