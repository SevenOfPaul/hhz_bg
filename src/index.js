import post from "./functions/post.js"
import get from "./functions/get.js"
const {getCode,getGames,addGame} = get;
const {postGame,postGames,postCode} = post;

  async function test(request, env, ctx){
    let response=new Response(await request.text());
    return response
  }
    export default {
      async scheduled(event, env, ctx) {
        const db = DB; 
        const gamesStr=await hhz.get("games");
          await hhz.put("games_backup",gamesStr);
     for(let g in JSON.parse(gamesStr)){
      await db.exec("INSERT INTO games (id, name, pc,android,info,desc) VALUES",g.values());
     }
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