import AddressTable from '../containers/address-table';

function AddressBox() {
  return (
    <section>
      <div className=''>
        <div className=''>
          <div className='card'>
            <h3 className='card-title'>Direcciones</h3>
            <AddressTable />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AddressBox;
