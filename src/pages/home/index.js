import React from "react";
import * as S from "pages/home/styles";
import home from "assets/icons/home.png";
import home2x from "assets/icons/home@2x.png";
import envelope from "assets/icons/envelope.png";
import envelope2x from "assets/icons/envelope@2x.png";
import facePlace from "assets/icons/face-place.png";
import facePlace2x from "assets/icons/face-place@2x.png";
import faceIcon from "assets/icons/face-place.png";
import faceIcon2x from "assets/icons/face-place@2x.png";
import logo from "assets/img/logo.png";
import rightSide from "assets/img/right-side.png";
import rear from "assets/img/rear.png";
import frontSide from "assets/img/front-side.png";
import car from "assets/img/car.png";
import assistedSteering from "assets/img/assisted-steering.png";
import accord from "assets/img/accord.png";
import logoIbama from "assets/img/logo-ibama.png";

import insta from "assets/icons/insta.png";
// import insta2x from "assets/icons/insta@2x.png";
import twitter from "assets/icons/twitter.png";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.HeaderContainer>
        <div>
          <div>
            <div>
              <img className="icon-small" src={home} alt="home-icon" />
              <img className="icon-medium" src={home2x} alt="home-icon" />
              <a className="link" href="/">
                Ir para o Portal Banzai
              </a>
            </div>
          </div>
          <div>
            <div>
              <img className="icon-small" src={facePlace} alt="face-icon" />
              <img className="icon-medium" src={facePlace2x} alt="face-icon" />
              <a className="link" href="/">
                Encontre uma concessionária
              </a>
            </div>
            <div>
              <img className="icon-small" src={envelope} alt="envelope-icon" />
              <img
                className="icon-medium"
                src={envelope2x}
                alt="envelope-icon"
              />
              <a className="link" href="/">
                Fale conosco
              </a>
            </div>
          </div>
        </div>
      </S.HeaderContainer>
      <S.SubHeaderContainer>
        <div>
          <div>
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div>
            <p className="central-atendimento">CENTRAL DE ATENDIMENTO</p>
            <p className="central-telefone">(31) 3123-1234</p>
          </div>
        </div>
      </S.SubHeaderContainer>
      <S.BannerContainer />
      <S.DrivingEmotionContainer>
        <div>
          <S.DrivingEmotionTitle>
            A EMOÇÃO DE DIRIGIR LEVA VOCÊ MAIS LONGE
          </S.DrivingEmotionTitle>
          <S.DrivingEmotionContent>
            <div>
              <img src={rightSide} alt="imagem da lateral direita do carro" />
              <img src={rear} alt="imagem da traseira do carro" />
              <img src={frontSide} alt="imagem da lateral frontal do carro" />
            </div>
            <div>
              <img
                className="driving-emotion-car"
                src={car}
                alt="imagem do carro"
              />
            </div>
          </S.DrivingEmotionContent>
          <S.DrivingEmotionTextFooter>
            O novo Civic Geração 10 traz um design único mudando a categoria de
            sedãs para sempre. Ele garante a melhor dirigibilidade com o máximo
            em sofisticação e conforto, atribuído por seu design interno e
            diferenciada ergonomia.
          </S.DrivingEmotionTextFooter>
        </div>
      </S.DrivingEmotionContainer>
      <S.BannerContainerTwo />
      <S.FeaturesContainer>
        <div>
          <S.FeaturesCard>
            <img
              className="card-image"
              src={assistedSteering}
              alt="direção com assistência"
            />
            <h3 className="card-title">Direção com Assistência</h3>
            <p className="card-text">
              Novo Honda Accord: a combinação perfeita des três atributos
              exigidos pelo consumidor: elegância, luxo e alto desempenho.
            </p>
          </S.FeaturesCard>
          <S.FeaturesCard>
            <img
              className="card-image"
              src={assistedSteering}
              alt="vidros elétricos com subida"
            />
            <h3 className="card-title">Vidros elétricos com subida</h3>
            <p className="card-text">
              Novo Honda Accord: a combinação perfeita des três atributos
              exigidos pelo consumidor: elegância, luxo e alto desempenho.
            </p>
          </S.FeaturesCard>
          <S.FeaturesCard>
            <img
              className="card-image"
              src={assistedSteering}
              alt="direção com assistência"
            />
            <h3 className="card-title">Câmbio CVT com Paddle Shift</h3>
            <p className="card-text">
              Novo Honda Accord: a combinação perfeita des três atributos
              exigidos pelo consumidor: elegância, luxo e alto desempenho.
            </p>
          </S.FeaturesCard>
        </div>
      </S.FeaturesContainer>
      <S.RealeaseContainer>
        <div>
          <h1 className="title">PRONTO PARA TER UM HONDA?</h1>
          <h2 className="subtitle">
            Conheça os últimos grandes lançamentos da honda.
          </h2>
          <div>
            <S.ReleaseCard>
              <img src={accord} alt="accord" />
              <p>
                Novo Honda Accord: a combinação perfeita de três atributos
                exigidos pelo consumidor: elegância, luxo e alto desempenho.
              </p>
              <S.ReleaseButton>Conheça Mais</S.ReleaseButton>
            </S.ReleaseCard>
            <S.ReleaseCard>
              <img src={accord} alt="accord" />
              <p>
                O City está muito mais moderno e esportivo. Com design único e
                mais tecnológico do que nunca, ele vai conquistar todos os
                olhares.
              </p>
              <S.ReleaseButton>Conheça Mais</S.ReleaseButton>
            </S.ReleaseCard>
            <S.ReleaseCard>
              <img src={accord} alt="accord" />
              <p>
                Com seu design inconfundível, o novo Honda Fit traz novidades
                que vão surpreender a todos e atrair ainda mais fãs.
              </p>
              <S.ReleaseButton>Conheça Mais</S.ReleaseButton>
            </S.ReleaseCard>
          </div>
        </div>
      </S.RealeaseContainer>
      <S.SocialContainer>
        <div className="container">
          <div>
            <S.SocialCard>
              <div className="section-one">
                <div>
                  <img
                    className="icon-facebook-placeholder"
                    src={facePlace}
                    alt="icone-facebook-placeholder"
                  />
                  <img
                    className="icon-facebook-placeholder"
                    src={facePlace2x}
                    alt="icone-facebook-placeholder"
                  />
                </div>
                <div>
                  <p className="find">Encontre uma</p>
                  <p className="dealership">CONCESSIONÁRIA</p>
                </div>
              </div>
            </S.SocialCard>
            <S.SocialCard>
              <div className="section-two">
                <p className="central">CENTRAL DE ATENDIMENTO</p>
                <p className="phone">(31) 3123-1234</p>
              </div>
            </S.SocialCard>
          </div>
          <div>
            <p className="follow">SIGA A BANZAI NAS REDES SOCIAIS</p>
          </div>
          <div>
            <S.SocialIcon>
              <img src={facePlace} alt="facebook" />
            </S.SocialIcon>
            <S.SocialIcon>
              <img src={insta} alt="instagram" />
            </S.SocialIcon>
            <S.SocialIcon>
              <img src={twitter} alt="twitter" />
            </S.SocialIcon>
          </div>
        </div>
      </S.SocialContainer>
      <S.FooterContainer>
        <div>
          <div className="section-one">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="section-two">
            <p className="text">Todos juntos fazem um trânsito melhor</p>
            <img className="logo-ibama" src={logoIbama} alt="logo-ibama" />
          </div>
        </div>
      </S.FooterContainer>
    </S.HomeContainer>
  );
}
