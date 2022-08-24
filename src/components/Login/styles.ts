import styled from "styled-components";

const Section = styled.section`

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    header{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 100vw;
        height: 130px;
    }

    h1{
        color:#FF577F;
        font-weight: 700;
        font-size: 25px;
        width: 200px;
        height: 19.97px;
        line-height: 150px;
        font-family: 'Inter';
        font-style: normal;
    }

    @media(min-width:946px) {
        h1{
        font-size: 27px;
        line-height: 130px;
        }
}

    form{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 296px;
        height: 402.69px;
        margin-top: 10px;
        background: #212529;
        box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
        border-radius: 3.20867px;
    }

    @media(min-width:946px) {
        form{
        width: 369px;
        height: 502px;
        }
}

    form>div{
        display: flex;
        flex-direction: column;
        height: 95px;
        align-items: center;
        justify-content: flex-start;
    }

    h3{
        width: 39.31px;
        height: 22.46px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14.439px;
        line-height: 22px;
        color: #F8F9FA;
        margin-top: 30px;
        margin-bottom: 40px;
    }

    @media(min-width:946px) {
        h3{
        width: 49px;
        height: 28px;
        font-size: 18px;
        line-height: 28px;
        }
}

    label{
        height: 0px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 9.772px;
        line-height: 0px;
        color: #F8F9FA;
        margin-left: -240px;
        margin-top: 0px;
        margin-bottom: 10px;
    }

    @media(min-width:946px) {
        label{
        font-size: 12.182px;
        margin-left: -290px;
        }
}

    span{
        color: red;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        margin-top: -17px;
        margin-left: -200px;
    }

    input{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8.14px;
        padding: 0px 13.0293px;
        width: 240px;
        height: 38.5px;
        background: #343B41;
        border: 0.9772px solid #343B41;
        border-radius: 3.20867px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13.0293px;
        line-height: 21px;
        color: #F8F9FA;
        margin-bottom: 20px;
    }

    @media(min-width:946px) {
        input{
        width: 310px;
        height: 48px;
        font-size: 16.2426px;
        }
}

    input:focus {
        border: 1px solid #F8F9FA;
  }

    button{
        background-color: #FF577F;
        color: #FFFFFF;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;
        width: 259.9px;
        height: 38.5px;
        border: 1.2182px solid #FF577F;
        border-radius: 4.06066px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 12.8347px;
        line-height: 21px;
        text-decoration: none;
        margin-bottom: 10px;
        cursor: pointer;
    }

    @media(min-width:946px) {
        button{
            width: 324px;
            height: 48px;
            font-size: 16px;
            line-height: 26px;
        }
    }

    a{
        text-decoration: none;
    }

    p{
        color: #868E96;
        width: 136.37px;
        height: 14.44px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 9.62602px;
        line-height: 14px;
        margin-bottom: 20px;
        margin-top: 0px;
    }

    @media(min-width:946px) {
        p{
            width: 170px;
            height: 18px;
            font-size: 12px;
            line-height: 18px;
            margin-top: 0px;
        }
    }

    a>button{
        background: #868E96;
        border: 1.2182px solid #868E96;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 12.8347px;
        line-height: 21px;
        border-radius: 4px;
        margin-bottom: 33px;
        margin-top: -10px;
    }

    @media(min-width:946px) {
        a>button{
            font-size: 16px;
            line-height: 26px;
        }
    }
`

export default Section