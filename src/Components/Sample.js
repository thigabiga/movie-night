import React from "react";
import ReactDOM from 'react-dom';

// class ProductRow extends React.Component {
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ?
//       product.name :
//       <span style={{color: 'red'}}>
//         {product.name}
//       </span>;

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

class MovieRow extends React.Component {
    render() {
      const movie = this.props.movie;
      const movieTitle = product.seen ?
        product.movieTitle :
        <span style={{color: 'red'}}>
          {product.movieTitle}
        </span>;
  
      return (
        <tr>
          <td>{movieTitle}</td>
          <td>{movie.seen}</td>
          <td>{movie.infoLink}</td>
        </tr>
      );
    }
  }

// class ProductTable extends React.Component {
//   render() {
//     const rows = [];
//     let lastCategory = null;
    
//     this.props.products.forEach((product) => {
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name} />
//       );
//       lastCategory = product.category;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

class MovieTable extends React.Component {
    render() {
      const rows = [];
      
      this.props.movies.forEach((movie) => {
        rows.push(
          <MovieRow
            movie={movie}
            key={movie.movieTitle} />
        );
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Movie</th>
              <th>Seen</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

// class SearchBar extends React.Component {
//   render() {
//     return (
//       <form>
//         <input type="text" placeholder="Search..." />
//         <p>
//           <input type="checkbox" />
//           {' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

class SearchBar extends React.Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Only show movies I've seen.
          </p>
        </form>
      );
    }
  }

// class FilterableProductTable extends React.Component {
//   render() {
//     return (
//       <div>
//         <SearchBar />
//         <ProductTable products={this.props.products} />
//       </div>
//     );
//   }
// }

class FilterableMovieTable extends React.Component {
    render() {
      return (
        <div>
          <SearchBar />
          <MovieTable movies={this.props.movies} />
        </div>
      );
    }
  }

// const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

const MOVIES = [
    {movieTitle: 'Top Gun', seen: true, infoLink: '#'},
    {movieTitle: 'When Harry Met Sally', seen: true, infoLink: '#'},
    {movieTitle: 'Notting Hill', seen: true, infoLink: '#'},
    {movieTitle: 'Atonement', seen: true, infoLink: '#'},
    {movieTitle: 'Fight Club', seen: true, infoLink: '#'},
    {movieTitle: 'Pulp Fiction', seen: false, infoLink: '#'}
  ];
 
// ReactDOM.render(
//   <FilterableProductTable products={PRODUCTS} />,
//   document.getElementById('container')
// );
 
ReactDOM.render(
    <FilterableMovieTable movies={MOVIES} />,
    document.getElementById('root')
  );