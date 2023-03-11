import { BobaProps } from '../../assets/sampleBobaAPI.js';
import Card from 'react-bootstrap/Card';
import Button from '../Button';
import './index.css';

interface BobaCardProps {
  order: BobaProps[];
  product: BobaProps;
  setOrder: (order: BobaProps[]) => void;
}

const BobaCard = (props: BobaCardProps): JSX.Element => {
  const { order, setOrder, product } = props;
  const { id, name, price, imageLink, description } = product;

  const handleAddItemToCart = () => {
    const cartList = [...order, product];
    setOrder(cartList);
  };

  return (
    <Card key={id} style={{ width: '18rem' }}>
      <Card.Img variant='top' src={imageLink} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div className='boba_desc'>{description}</div>
          <div>${price}</div>
        </Card.Text>
        <Button variant={'primary'} label={'Add to cart'} onClick={handleAddItemToCart} />
      </Card.Body>
    </Card>
  );
};

export default BobaCard;
