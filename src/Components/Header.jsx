import logo from "../assets/img/MIC Logo.svg";

export default function Header() {
  return (
    <div className="flex bg-[#0a387d] text-white justify-between p-2">
      <div className="flex">
        <img src={logo} alt="mic logo" width={"40%"} />
      </div>
      <i className="fa fa-bars flex items-center"></i>
    </div>
  );
}
