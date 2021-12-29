import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      drinks: []
    };
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            drinks: result.drinks
          });
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, drinks } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul style={{color:"white"}}>
          {drinks.map(drink => (
            <li key={drink.id}>
             {drink.strDrink}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default MyComponent;