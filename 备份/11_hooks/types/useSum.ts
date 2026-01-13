import { ref,onMounted } from 'vue'

export default function() {
    
    let sum = ref(0)

    const increment = ()=>{
        sum.value += 1
    }

    const decrement = ()=>{
        sum.value-=1
    }
    
    onMounted(()=>{
        increment()
    })

    // 向外部暴露接口
    return {sum,increment,decrement}
}