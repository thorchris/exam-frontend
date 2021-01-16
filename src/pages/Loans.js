import Vamada from "../images/logo.png";

export default function Loans() {
  return (
    <div className="container-fluid padding">
       <img className="logo" src={Vamada} alt=""></img>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="mt-5">Table with your loans:</h2>
        </div>
      </div>
    </div>
  );
}
