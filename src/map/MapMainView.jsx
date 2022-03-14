const MapMainView = ({ navbarContainer, mapInputContainer, mapListContainer }) => {
  return (
    <>
      <div style={{
        width: "100%",
        minHeight: "100%",
        top: "56px",
        position: "fixed"
      }} id='map' />
      {navbarContainer}
      {mapInputContainer}
      {mapListContainer}
      <style type="text/css">
        {`
        .login-btn {
          background-color: purple;
          color: white;
          height: 40px;
          width: 40px;
        }
        `}
      </style>
    </>
  );
}

export default MapMainView;