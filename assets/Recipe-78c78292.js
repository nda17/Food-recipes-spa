import{r as i,u as p,j as e,P as d,L as n,O as l}from"./index-b958d6c1.js";import{b as o}from"./api-2b35fd8e.js";import{B as R}from"./ButtonGoBack-ebc43e9d.js";const m="_cardRecipeWrap_htibp_1",x="_cardRecipeImage_htibp_4",_="_cardRecipeTitle_htibp_7",h="_cardRecipeTextCategory_htibp_10",u="_cardRecipeTextArea_htibp_13",T="_cardRecipeText_htibp_10",b="_cardRecipeTableWrap_htibp_19",g="_cardRecipeColumnTextWrap_htibp_22",j="_cardRecipeTableColumn_htibp_25",I="_cardRecipeIngredientsWrap_htibp_28",W="_cardRecipeIngredients_htibp_28",C="_cardRecipeIngredientsTextColumn_htibp_34",N="_watchVideoRecipeButton_htibp_37",B="_btnGoBackWrap_htibp_40",c={cardRecipeWrap:m,cardRecipeImage:x,cardRecipeTitle:_,cardRecipeTextCategory:h,cardRecipeTextArea:u,cardRecipeText:T,cardRecipeTableWrap:b,cardRecipeColumnTextWrap:g,cardRecipeTableColumn:j,cardRecipeIngredientsWrap:I,cardRecipeIngredients:W,cardRecipeIngredientsTextColumn:C,watchVideoRecipeButton:N,btnGoBackWrap:B},A=()=>{const[a,s]=i.useState({}),{id:t}=p();return i.useEffect(()=>{o(t).then(r=>s(r.meals[0])).catch(r=>{console.error(r)})},[t]),e.jsx(e.Fragment,{children:a.idMeal?e.jsxs("div",{className:c.cardRecipeWrap,children:[e.jsx("img",{className:c.cardRecipeImage,src:a.strMealThumb,alt:`Product image: ${a.strMealThumb}`}),e.jsx("h2",{className:c.cardRecipeTitle,children:a.strMeal}),e.jsx("p",{className:c.cardRecipeTextCategory,children:`Category: ${a.strCategory}`}),e.jsx("p",{className:c.cardRecipeTextArea,children:`Area: ${a.strArea}`}),e.jsx("p",{className:c.cardRecipeText,children:a.strInstructions}),e.jsxs("div",{className:c.cardRecipeTableWrap,children:[e.jsxs("div",{className:c.cardRecipeColumnTextWrap,children:[e.jsx("p",{className:c.cardRecipeTableColumn,children:"Ingredient:"}),e.jsx("p",{className:c.cardRecipeTableColumn,children:"Measure:"})]}),Object.keys(a).map(r=>r.includes("Ingredient")&&a[r]?e.jsxs("div",{className:c.cardRecipeIngredientsWrap,children:[e.jsx("div",{className:c.cardRecipeIngredients,children:e.jsx("p",{className:c.cardRecipeIngredientsTextColumn,children:a[r]})}),e.jsx("div",{className:c.cardRecipeIngredients,children:e.jsx("p",{className:c.cardRecipeIngredientsTextColumn,children:a[`strMeasure${r.slice(13)}`]})})]},r):null)]}),e.jsx(n,{to:"video",state:{strYoutube:a.strYoutube},className:c.watchVideoRecipeButton,children:"Watch video recipe"}),e.jsx(l,{}),e.jsx("div",{className:c.btnGoBackWrap,children:e.jsx(R,{})})]}):e.jsx(d,{})})};export{A as default};
