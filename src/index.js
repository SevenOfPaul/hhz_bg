import post from "./functions/post.js"
import get from "./functions/get.js"
const {getCode,getGames,addGame} = get;
const {postGame,postGames} = post;
  async function postCode(request, env, ctx){
    let reqBody=await request.json();
    let body={};
     await hhz.put("code",JSON.stringify(reqBody.code));
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
  async function  scheduledEmit(event, env, ctx) {
      await hhz.put("games_backup",await hhz.get("games"));
      await hhz.put("games",JSON.stringify(raw));
    }
    async  function fetchEmit(request, env, ctx) {
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
    }
    addEventListener('scheduled', event => {
        event.respondWith(scheduledEmit(event.request))
      })
      addEventListener('fetch', event => {
        event.respondWith(fetchEmit(event.request))
      })