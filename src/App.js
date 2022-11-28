import './App.css';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './componentes/Home'
import FormRestaurant from './componentes/FormRestaurant'
import Search from './componentes/Search'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const restaurantsList = [
    {
      id: 'a',
      name: 'El rincón enchilado',
      description: 'Descubrimos ocho platos deliciosos, fotogénicos y extraordinarios, preparados a base de queso ¡Conoce los mejores platillos con queso',
      address: 'Cra. 30 #10',
      image: require('./imagenes/restaurante-rincon.jpg'),
    },
    {
      id: 'b',
      name: 'Puro sabor',
      description: 'sentirás un ambiente de tranquilidad desde el primer momento que llegas. Inmediatamente te darán ganas de tomarte un café, comer algo y descansar del caos y la premura de la vida cotidiana.',
      address: 'Calle 49, Av. Ayacucho #33-5',
      image: require('./imagenes/restaurante-puro-sabor.jpg'),
    },
    {
      id: 'c',
      name: 'Cocinando con Tequila',
      description: 'restaurante con el sabor característico que el carbón le da a las comidas. Son especialistas en platos regionales que podrás disfrutar en un ambiente amenizado con boleros y música popular.',
      address: 'Cra. 43 #53-51',
      image: require('./imagenes/restaurante-cocinando-tequila.jpg'),
    },
    {
      id: 'd',
      name: 'Comiendo con Mariachis',
      description: 'Su oferta gastronómica muestra un panorama de 63 platos, entre aperitivos, enchiladas, sopas, ensaladas, tacos, fajitas, platos internacionales, postres y sus deliciosos margaritas.',
      address: 'Cl. 52 #38-50',
      image: require('./imagenes/restaurante-comiendo.jpeg'),
    },
  ];

  return (
    <Router>
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Directorio</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link text-secondary" to="/">Restaurantes</Link>
            <Link className="nav-link text-white" to="/search">Buscar</Link>
            <Link className="nav-link text-white" to="/form">Agregar Restaurante</Link>
          </Nav>
        </Container>
      </Navbar>
    
    <Routes>
      <Route path="/" exact element={
        <Home restaurants={restaurantsList} /> 
      }>
      </Route>
      <Route path="/form" element= { <FormRestaurant />}>
      </Route>
      <Route path="/search" element={
        <Search restaurants={restaurantsList}/>
      }>
      </Route>
    </Routes>
  </div>  
  </Router>
  );
}

export default App;
