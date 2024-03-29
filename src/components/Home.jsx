import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectAlbum } from "../redux/actions";

const Home = () => {
  const [queenAlbums, setQueenAlbums] = useState([]);
  const [katyPerryAlbums, setKatyPerryAlbums] = useState([]);
  const [eminemAlbums, setEminemAlbums] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  const showArtist = async (artist, setAlbum) => {
    try {
      let response = await fetch(baseEndpoint + artist, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        const { data } = await response.json();
        console.log("ciao", data);
        setAlbum(data);
      } else {
        throw new Error("errore recupero dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showArtist("queen", setQueenAlbums);
    showArtist("katy perry", setKatyPerryAlbums);
    showArtist("eminem", setEminemAlbums);
  }, []);

  const changeArtist = (artist) => {
    setSelectedImage(artist);
    dispatch(selectAlbum(artist));
  };

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="a">TRENDING</a>
          <a href="a">PODCAST</a>
          <a href="a">MOODS AND GENRES</a>
          <a href="a">NEW RELEASES</a>
          <a href="a">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row>
              {queenAlbums.slice(0, 4).map((data) => (
                <Col key={data.id} className="text-center">
                  <img
                    src={data.album.cover_medium}
                    alt={data.album.title}
                    className={selectedImage === data}
                    onClick={() => changeArtist(data)}
                    style={{ cursor: "pointer" }}
                  />
                  <p>{data.title}</p>
                  <div className="d-flex align-items-center">
                    {selectedImage === data}
                    <p className="ms-5">{data.artist.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row>
              {katyPerryAlbums.slice(0, 4).map((data) => (
                <Col key={data.id} className="text-center">
                  <img
                    src={data.album.cover_medium}
                    alt={data.album.title}
                    onClick={() => changeArtist(data)}
                    style={{ cursor: "pointer" }}
                  />
                  <p>{data.title}</p>
                  <div className="d-flex align-items-center">
                    {selectedImage === data}
                    <p className="ms-5">{data.artist.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row>
              {eminemAlbums.slice(0, 4).map((data) => (
                <Col key={data.id} className="text-center">
                  <img
                    src={data.album.cover_medium}
                    alt={data.album.title}
                    onClick={() => changeArtist(data)}
                    style={{ cursor: "pointer" }}
                  />
                  <p>{data.title}</p>
                  <div className="d-flex align-items-center">
                    {selectedImage === data}
                    <p className="ms-5">{data.artist.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
