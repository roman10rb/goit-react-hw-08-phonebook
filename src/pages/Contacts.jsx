import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectLoading } from 'redux/tasks/selectors';
import  Form  from '../components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
// import css from './pages.module.css'


export default function Contacts() {

  const isLoading = useSelector(selectLoading);

  return (
    <>
      <div >
        <Helmet>
        <title>Your Contacts</title>
      </Helmet>
        <Form />
        <div>{isLoading && 'Request in progress...'}</div>
         <div >
         <div >
        <Helmet>
        <title>Your Contact's filter</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      </div>
      <ContactList />
        </div>
        <div >
    

      </div>
</div>



    </>
  );
}