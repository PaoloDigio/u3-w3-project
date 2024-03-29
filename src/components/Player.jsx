import { useSelector } from "react-redux";

const Player = () => {
  const selectedAlbum = useSelector((state) => state.selectedAlbum);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 justify-content-center align-items-center">
            {selectedAlbum && (
              <div className="col-3 ">
                <div className="d-flex align-items-center">
                  <img
                    src={selectedAlbum.album.cover_medium}
                    alt={selectedAlbum.album.title}
                    style={{ width: "50px" }}
                  />
                  <p className=" ms-4 text-white">{selectedAlbum.title}</p>
                </div>
              </div>
            )}
            <div className="col-6 playerControls">
              <div className="d-flex">
                <a href="a">
                  <img src="/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="a">
                  <img src="/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="a">
                  <img src="/playerbuttons/play.png" alt="play" />
                </a>
                <a href="a">
                  <img src="/playerbuttons/next.png" alt="next" />
                </a>
                <a href="a">
                  <img src="/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3" style={{ height: "3px" }}>
                <div role="progressbar"></div>
              </div>
            </div>
            {selectedAlbum && <div className="col-3 "></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
