// // import post from "./functions/post.js"
// // import get from "./functions/get.js"
// // const {getCode,getGames,addGame} = get;
// // const {postGame,postGames,postCode} = post;
// // import { D1 } from 'd1';
// async function getCode(request, env, ctx){
//   const code=JSON.parse(await hhz.get("code"));
//   let body={code:200,body:{code}}
//   let response=new Response(JSON.stringify(body));
//   return response
// } 
// async function getGames(request, env, ctx){
//   const games=JSON.parse(await hhz.get("games"))
//   let body={code:200,body:{games}}
//   for(let g in games){
//     await env.DB.prepare("INSERT INTO games (id, name, pc,android,info,desc) VALUES (?,?,?,?,?)").bind(g.values()).all();
//    }
//   let response=new Response(JSON.stringify(body));
//   return response
// }
// async function addGame(request, env, ctx){
//   const games=JSON.parse(await hhz.get("games"))
//   let body={code:200,body:{games}}
//   let response=new Response(JSON.stringify(body));
//   return response
// }
// async function postCode(request, env, ctx){
//   let reqBody=await request.json();
//   let body={};
//    await hhz.put("code",JSON.stringify(reqBody.code));
//     body={
//      code:200,
//     body:{
//      message:"修改成功"
//     }
//    }
//   let response=new Response(JSON.stringify(body));
//   return response
// }
// async function postGames(request, env, ctx){
//   let reqBody=await request.json();
//   console.log(reqBody);
//   let body={};
//       await hhz.put("games",JSON.stringify(reqBody.games));
//     body={
//      code:200,
//     body:{
//      message:"添加成功"
//     }
//    }
//    const response=new Response(JSON.stringify(body));
//    return response;
// }
// async function postGame(request, env, ctx){
//   let reqBody=await request.json();
//   let body={};
//    let games=JSON.parse(await hhz.get("games"));
//     if(reqBody.game){
//       games.push(reqBody.game);
//       await hhz.put("games",JSON.stringify(games));
//     }
//     body={
//      code:200,
//     body:{
//      message:"添加成功"
//     }
//    }
//    const response=new Response(JSON.stringify(body));
//    return response;
// }
//   async function test(request, env, ctx){
//     let response=new Response(await request.text());
//     return response
//   }
//     export default {
//     //   async scheduled(event, env, ctx) {
//     //     const gamesStr=await hhz.get("games");
//     //       await hhz.put("games_backup",gamesStr);
//     //  for(let g in JSON.parse(gamesStr)){
//     //   await env.DB.exec("INSERT INTO games (id, name, pc,android,info,desc) VALUES",g.values());
//     //  }
//     //   },
//       async fetch(request, env, ctx) {
//         if(request.method=='GET'){
//           //请求
//           if(request.url.indexOf("addGame")!==-1){
//             return addGame(request, env, ctx);
//           }
//         if(request.url.indexOf("code")!==-1){
//           return getCode(request, env, ctx);
//         }
//      return getGames(request, env, ctx);
//         }else if(request.method=='POST'){
//           if(request.url.indexOf("code")!==-1){
//             return postCode(request, env, ctx);
//           }
//           if(request.url.indexOf("addGame")!==-1){
//             return postGame(request, env, ctx);
//           }
//           if(request.url.indexOf("test")!==-1){
//             return test(request, env, ctx);
//           }
//             return postGames(request,env,ctx);
//         }else if(request.method=='OPTIONS'){
//          return new Response("*");
//         }
//       },
//     };
export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === "/") {
      // If you did not use `DB` as your binding name, change it here
      const { results } = await env.DB.prepare(
        "SELECT * FROM games"
      )
        .all();
      return new Response(JSON.stringify(results), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(
      "Call /api/beverages to see everyone who works at Bs Beverages"
    );
  },
};