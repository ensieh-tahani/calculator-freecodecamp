import styled from "styled-components";
export const Contianer = styled.div`
      display: grid;
      justify-content: center;
      align-content:center;
      width:400px;
      margin:40px auto;
      grid-template-columns:repeat(4,100px);
      grid-template-rows:minmax(120px,auto)repeat(5,100px);
      box-shadow: 1px 2px 5px #1D3557;
      border-radius:25px; 
`
 export const Screen = styled.div `
      grid-column: 1 / -1;
      background-color:#BEE9E8;
      display:flex;
      justify-content: space-around;
      flex-direction:column;
      padding:10px;
      word-wrap:break-word;
      word-break:;break-all;
      text-align:right;
      border-top-left-radius:25px;
      border-top-right-radius:25px;
 `
  export const Previous = styled.div`
      color : #1B4965;
      font-size:1.5rem;
  `
  export const Current= styled.div`
      color : #1B4965;
      font-size:2.5rem;
      letter-spacing:2px;
  `

  export const Button = styled.div`
      cursor:pointer;
      font-size:2.25rem;
      border:1px outset white;
      outline:none;
      text-align:center;
      color : white;
      line-height : 80px; 
      padding:10px;
      background-color:#62B6CB;

      &:hover{
            background-color:#e0fbfc;
      }
      ${({gridSpan}) => gridSpan && `grid-column : span ${gridSpan};`}
      ${({operation}) => operation && `background-color:#5FA8D3;`}
      ${({control}) => control && `background-color:#1B4965;`}
     
      ${({dot}) => dot && `background-color:#1B4965;border-bottom-left-radius:25px;`}
      ${({equal}) => equal && `background-color:#5FA8D3;border-bottom-right-radius:25px;`}

          
  `