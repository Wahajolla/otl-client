import { FC } from 'react';
import Contacts from '../components/Contacts';
import { fetchColors } from './api/catalog.fetch';
const ContactView = ({ data }) => {
  return (
    <div>
      <Contacts />
      <ul>
        {data.map((color) => {
          return <li key={color.id}>{color.name}</li>;
        })}
      </ul>
    </div>
  );
};

export async function getServerSideProps(context) {
  const data = await fetchColors();

  return {
    props: { data },
  };
}

export default ContactView;
