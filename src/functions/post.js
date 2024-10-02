
async function postGames(request, env, ctx){
    let reqBody=await request.json();
    console.log(reqBody);
    let body={};
        await hhz.put("games",JSON.stringify(reqBody.games));
      body={
       code:200,
      body:{
       message:"添加成功"
      }
     }
     const response=new Response(JSON.stringify(body));
     return response;
  }
  async function postGame(request, env, ctx){
    let reqBody=await request.json();
    let body={};
     let games=JSON.parse(await hhz.get("games"));
      if(reqBody.game){
        games.push(reqBody.game);
        await hhz.put("games",JSON.stringify(games));
      }
      body={
       code:200,
      body:{
       message:"添加成功"
      }
     }
     const response=new Response(JSON.stringify(body));
     return response;
  }
  export default {postGames,postGame}