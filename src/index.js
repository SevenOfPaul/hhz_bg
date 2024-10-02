import post from "./functions/post.js"
import get from "./functions/get.js"
const {getCode,getGames,addGame} = get;
const {postGame,postGames} = post;
  async function postCode(request, env, ctx){
    let reqBody=await request.json();
    let body={};
     await env.hhz.put("code",JSON.stringify(reqBody.code));
      body={
       code:200,
      body:{
       message:"修改成功"
      }
     }
    let response=new Response(JSON.stringify(body));
    return response
  }
  async function test(request, env, ctx){
    let response=new Response(await request.text());
    return response
  }
  export default {
    async scheduled(event, env, ctx) {
      await env.hhz.put("games_backup",await env.hhz.get("games"));
      await env.hhz.put("games",JSON.stringify(raw));
    },
    async fetch(request, env, ctx) {
      if(request.method=='GET'){
        //请求
        if(request.url.indexOf("addGame")!==-1){
          return addGame(request, env, ctx);
        }
      if(request.url.indexOf("code")!==-1){
        return getCode(request, env, ctx);
      }
   return getGames(request, env, ctx);
      }else if(request.method=='POST'){
        if(request.url.indexOf("code")!==-1){
          return postCode(request, env, ctx);
        }
        if(request.url.indexOf("addGame")!==-1){
          return postGame(request, env, ctx);
        }
        if(request.url.indexOf("test")!==-1){
          return test(request, env, ctx);
        }
          return postGames(request,env,ctx);
      }else if(request.method=='OPTIONS'){
       return new Response("*");
      }
    },
  };