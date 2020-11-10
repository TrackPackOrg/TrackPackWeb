import LoginForm from '../containers/login_form';

function LoginBox() {
  return (
    <section>
      <div className='container container-large'>
        <div className='containeer is-hcentered col col-sm-10'>
          <div className='card'>
            <h3 className='card-title'>Inicio de Sesión</h3>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginBox;
