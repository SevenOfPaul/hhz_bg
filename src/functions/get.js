async function getCode(request, env, ctx){
    const code=JSON.parse(await hhz.get("code"));
    let body={code:200,body:{code}}
    let response=new Response(JSON.stringify(body));
    return response
  }
  async function getGames(request, env, ctx){
    const games=JSON.parse(await hhz.get("games"))
    let body={code:200,body:{games}}
    let response=new Response(JSON.stringify(body));
    return response
  }
  async function addGame(request, env, ctx){
    const games=JSON.parse(await hhz.get("games"))
    let body={code:200,body:{games}}
    let response=new Response(JSON.stringify(body));
    return response
  }
  export default {getCode,getGames,addGame}