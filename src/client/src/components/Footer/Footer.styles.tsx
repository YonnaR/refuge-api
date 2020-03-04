import styled from 'styled-components'

export const StyledFooter = styled.footer`

    background-color: #2B2D2D!important;
    margin-top: 135px;
    padding: 35px 0 25px 0;
    color: #fff;
    font-size: 90%;
    width: 100vw;
    > h4 {
        font-weight: 700;
        letter-spacing: 4px;
        margin-bottom: 50px;
        text-transform: uppercase;
    }
    ul li {
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 3px;
        line-height: 40px;
        text-transform: uppercase;
    }
    ul li p{
        font-size: 16px;
        font-weight: 500;
    }
    ul li a{
        color: #fff;
    }
    ul li a:hover{
        color: #3B752F
    }
    .footer-sgwidget {
        margin: 20px auto;
        overflow: hidden;
    }
    .footer-contact-info>div {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        margin: 10px 0;
        padding: 8px 0;
        position: relative;
        padding-left: 40px;
    }
`
