import AddressBox from './components/address';
import UserProfile from './containers/user-profile';
function Profile() {
  return (
    <div className='row'>
      <div className='col col-lg-4'>
        <UserProfile />
      </div>
      <div className='col col-lg-8'>
        <AddressBox />
      </div>
    </div>
  );
}

export default Profile;
