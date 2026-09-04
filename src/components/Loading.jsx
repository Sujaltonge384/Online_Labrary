
// This component is displayed while books are being
// downloaded from the API.


function Loading() {

  return (

    <div className="loading">

      <div className="spinner"></div>

      <p>
        Loading books...
      </p>

    </div>
  );
}


export default Loading;