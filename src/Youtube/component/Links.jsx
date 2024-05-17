export default function Links({linksObj,open}) {
  return (
    <div className={open ? "is-open sidebar-link" : "sidebar-link"}>
      <img src={linksObj.image} alt="" />
      <div className="side-bar-font">{linksObj.name}</div>
    </div>
  );
}
