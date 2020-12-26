const Loading = () => {
    return (
    <>
        <div className="text-center">
            <h2 className="animate__animated animate__pulse mb-3">Loading...</h2>
            <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>    
    </>
    )
  }

  export default Loading