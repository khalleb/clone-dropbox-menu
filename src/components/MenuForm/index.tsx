import React from 'react';
import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  function handleToggle(){
    if(window.toggleActiveMenu){
      window.toggleActiveMenu();
    }
  }
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        <button className="action--close" onClick={handleToggle}>✕</button>
      </Navigation>
      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">ou <a href="#">acesse sua conta</a></span>
        

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <div className="checkboxAgree">
          <input type="checkbox"/>
          <label>Concordo com os <a href="#">Termos do Dropbox</a></label>
        </div>

        <button>Registre-se</button>

        <button className="buttonGoogle">Registra-se pelo Google</button>
        <span className="terms">
        Esta página é protegida pelo reCAPTCHA e está sujeita à <a href="#">Política de privacidade</a> e aos <a href="#">Termos de serviço</a> do Google.
        </span>
      </Form>
    </Container>
  )
}

export default MenuForm;