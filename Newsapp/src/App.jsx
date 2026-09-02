import { useState } from 'react';
function App(){
  const [news ,setNews]=useState("");
  const findNews=()=>
  {
    
    if(news==="Sports"){
      return <h1>This is Sports news,India won the match aganist England</h1>;
    }
    else if(news==="Local"){
      return <h1>This is Local news.Collector opened a well near the village</h1>;
    }
    else if(news==="International"){
      return <h1>This is International news. Global summit to be held next month</h1>;
    }
    else{
      if(news===""){
        return <h1>This is news App</h1>;
      }
      else{
        return <h1>News not found</h1>;
      }
    }
  }
return(
  <div>
    <input type="text" placeholder="Enter news type" value={news} onChange={(e) => setNews(e.target.value)} />
    <button onClick={findNews}>Find News</button>
    <h1>{findNews()}</h1>
  </div>
)
}

export default App;

