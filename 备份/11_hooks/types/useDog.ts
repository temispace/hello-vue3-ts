import {reactive,onMounted} from 'vue'
import axios,{AxiosError} from 'axios'

export default function(){

    // 定义响应式数据
    let dogList = reactive({
        urlList: [] as string[],
        isLoading: false
    })

    async function getDog(){
        dogList.isLoading = true
        try {
           let {data} = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')   
           dogList.urlList.push(data.message)  
        } catch(error) {
            const err = <AxiosError>error
            alert(err)     
        } finally {
             dogList.isLoading = false
        }
    }

    onMounted(()=>{
        getDog()
    })

    return {getDog,dogList}
}