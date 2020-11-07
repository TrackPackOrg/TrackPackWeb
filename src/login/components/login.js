import LoginForm from '../containers/login_form';

function LoginBox() {
  return (
    <section className=''>
      <div className='row kas'>
        <div className='col col-lg-4'>
          <div className='card'>
            <h3>Inicio de Sesión</h3>

            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginBox;
