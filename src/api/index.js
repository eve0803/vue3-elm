/**
  * 接口列表
  */
import {baseUrl} from './base'; // 导入接口域名列表
import axios from './http'; // 导入http中创建的axios实例

 const position =   {
    // 获取首页默认地址
    cityGuess (params) {
        return axios.get(`${baseUrl}/v1/cities`,{
           params: params
        });
    }
};
export default {
  position
}
