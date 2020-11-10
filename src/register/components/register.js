import RegisterForm from '../containers/register_form';

function RegisterBox() {
  return (
    <section styles='width:100%'>
      <div className='row'>
        <div className='is-hcentered col col-sm-10'>
          <div className='card'>
            <h3 className='card-title'>¡Regístrate!</h3>

            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterBox;
