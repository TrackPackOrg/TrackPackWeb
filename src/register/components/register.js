import RegisterForm from '../containers/register_form';

function RegisterBox() {
  return (
    <section className=''>
      <div className='row kas'>
        <div className='col col-lg-4'>
          <div className='card'>
            <h3>¡Regístrate!</h3>

            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterBox;
