import { createGlobalStyle } from 'styled-components'
import welcomebg from '../assets/excursion/image001.jpg'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700');
    html, body {
        width: 100vw;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    body {
        font-size: 1.3rem;
        color: #000;
        padding: 0;
        margin: 0;
        font-family: 'Oswald', sans-serif;
    }
    .btn-primary{
        background-color: #3B752F;
        border: none;
    }
    .btn-primary:hover{
        background-color: #F9E70F;
        color: #3B752F;
        border: none;
    }
    .subtitle{
        font-style: italic;
        font-weight: bold;
        color: #2B2D2D;
    }
    .text-yellow{
        color:#fecc17;
    }
    .banner{
        position: relative;
        left: 0px;
        padding: 0px;
        margin: 0px;
        width: 100vw;
        height: auto;
    }
    .center{
        display:flex;
        justify-content:center;
        align-items: center;
    }
    .rigth{
        display: flex;
        justify-content: flex-end;
    }
    .text-left{
        text-align: left
    }
    .text-center{
        text-align: center
    }
    .text-white{
        color:white;
    }
    .border-top{
        border-top-color: "#000000";
        border-top-width: "1px"
    }
    .width-100{
        width: 100%;
    }
    .border-box{
        height: 100%;
        border: 2px solid #3B752F;
        border-radius: 15px;
        margin:4%;
        padding:15px;
    }
    .width-100{
        width: 100vw;
    }
    a, a:hover, a:focus, button:hover, button:focus {
        outline: 0 none !important;
        text-decoration: none;
        color: #3B752F;
    }
    a:hover{
        color: #F9E70F;
    }
    .welcome-image{
        background: url(${welcomebg});
        background-repeat: no-repeat;
    }
    .btn{
        font-size: 140%;
    }
    .pos-center {
        text-align: center;
        background: #000;
    }
    .center-pills{
        display: inline-block;
    }

    button.close:hover {
        background: #fff;
        border-color: #fff;
        opacity: 1;
        color: #3B752F;
    }
    .img{
        width: 95%;
        height: auto;
    }
    .flex-equal > * {
    -ms-flex: 1;
    flex: 1;
    }
    @media (min-width: 768px) {
    .flex-md-equal > * {
        -ms-flex: 1;
        flex: 1;
    }
    }
    .overflow-hidden { overflow: hidden; }
`