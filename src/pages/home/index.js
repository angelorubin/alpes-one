import React from "react";
import * as S from "pages/home/styles";
import homeIcon from "assets/img/home-icon.png";
import envelopeIcon from "assets/img/black-envelope.svg";
import facePlaceholderIcon from "assets/img/face-placeholder.png";
import logo from "assets/img/logo.png";
import rightSide from "assets/img/right-side.png";
import rear from "assets/img/rear.png";
import frontSide from "assets/img/front-side.png";
import car from "assets/img/car.png";
import assistedSteering from "assets/img/assisted-steering.png";
import accord from "assets/img/accord.png";
import logoIbama from "assets/img/logo-ibama.png";

import faceIcon from "assets/img/face-icon.png";
import instaIcon from "assets/img/insta-icon.png";
import twitterIcon from "assets/img/twitter-icon.png";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.HeaderContainer>
        <div>
          <div className="section-one">
            <S.HeaderIcon src={homeIcon} alt="home-icone" />
            <S.HeaderLink>Ir para o Portal Banzai</S.HeaderLink>
          </div>
          <div className="section-two">
            <div className="section-one">
              <S.HeaderIcon src={facePlaceholderIcon} alt="face-icon" />
              <S.HeaderLink>Encontre uma concessionária</S.HeaderLink>
            </div>
            <div className="section-two">
              <S.HeaderIcon src={envelopeIcon} alt="envelope-icon" />
              <S.HeaderLink>Fale Conosco</S.HeaderLink>
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
        <S.Container>
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
        </S.Container>
      </S.FeaturesContainer>
      <S.RealeaseContainer>
        <S.Container>
          <h1 className="title">PRONTO PARA TER UM HONDA?</h1>
          <h2 className="subtitle">
            Conheça os últimos grandes lançamentos da honda.
          </h2>
          <S.Container>
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
          </S.Container>
        </S.Container>
      </S.RealeaseContainer>
      <S.SocialContainer>
        <div className="container">
          <S.Container>
            <S.SocialCard>
              <div className="section-one">
                <div>
                  <img
                    className="icon-facebook-placeholder"
                    src={facePlaceholderIcon}
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
          </S.Container>
          <S.Container>
            <p className="follow">SIGA A BANZAI NAS REDES SOCIAIS</p>
          </S.Container>
          <S.Container>
            <S.SocialIcon>
              <img src={faceIcon} alt="facebook" />
            </S.SocialIcon>
            <S.SocialIcon>
              <img src={instaIcon} alt="instagram" />
            </S.SocialIcon>
            <S.SocialIcon>
              <img src={twitterIcon} alt="twitter" />
            </S.SocialIcon>
          </S.Container>
        </div>
      </S.SocialContainer>
      <S.FooterContainer>
        <S.Container>
          <div className="section-one">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="section-two">
            <p className="text">Todos juntos fazem um trânsito melhor</p>
            <img className="logo-ibama" src={logoIbama} alt="logo-ibama" />
          </div>
        </S.Container>
      </S.FooterContainer>
    </S.HomeContainer>
  );
}
