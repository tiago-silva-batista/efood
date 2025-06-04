type Restaurant = {
  id: string
  title: string
  description: string
  image: string
  tipo: string
  avaliacao: string
  destaque?: boolean
}

type Props = {
  isOpen: boolean
  onClose: () => void
  restaurant: Restaurant
}

const RestaurantModal = ({ isOpen, onClose, restaurant }: Props) => {
  if (!isOpen) return null

  return (
    // <div
    //   style={{
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     backgroundColor: 'rgba(0,0,0,0.6)',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    //   }}
    // >
    //   <div
    //     style={{
    //       background: 'white',
    //       padding: '24px',
    //       maxWidth: '600px',
    //       borderRadius: '8px'
    //     }}
    //   >
    <div>
      <div>
        <h2>{restaurant.title}</h2>
        <img src={restaurant.image} alt={restaurant.title} width={400} />
        <p>{restaurant.description}</p>
        <p>
          {restaurant.tipo} - {restaurant.avaliacao} ★
        </p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  )
}

export default RestaurantModal
