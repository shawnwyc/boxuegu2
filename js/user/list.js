/**
 * Created by wyc on 2017/2/25.
 */

//每一个模块都要使用到jquery,虽让重复在require那里引用了jquery
//这里也使用了,但是不会重复加载
define(['jquery'],function($){

    console.log('list被加载了')
})
