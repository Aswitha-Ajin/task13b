async function foo(){
  let res=await fetch(" https://api-thirukkural.vercel.app/api?num=1");
  let result=await res.json();
  console.log(result);
  {
      
      var div=document.createElement("div");
      div.style.color="white";
      div.style.fontSize="30px";
      
      div.innerHTML=`<h6 >குறள்${result.number}.</h6>
          <h6 >${result.sect_tam}</h6>
          <h6 >${result.chapgrp_tam}</h6>
          <h6 >${result.chap_tam}</h6>
          <h6 ><b>${result.line1}</b></h6>
          <h6 ><b>${result.line2}</b></h6>
          <h6 >விளக்கம்:${result.tam_exp}</h6>
          <h6 >${result.sect_eng}1.</h6>
          <h6 >${result.chapgrp_eng}</h6>
          <h6 >${result.chap_eng}</h6>
          <h6 >Explanation</h6>
          <h6>${result.eng}</h6>
          <h6>${result.eng_exp}</h6>`;
    document.body.append(div);
    
  
      
  }
}
foo();
