import Vamada from "../images/logo.png";

export default function Home() {
  return (
    <div className="container-fluid padding">
       <img className="logo" src={Vamada} alt=""></img>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="mt-5">Welcome to Vamada Library</h2>
          <h4 className="mt-5 text-muted">Click the menu top right to navigate around</h4>
          <hr></hr>
          <h4 className="mt-5">For now can see the books in our database</h4>
          <h4 className="mt-1">Soon you will be able to loan books online!</h4>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
