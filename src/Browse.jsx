import React, { Component, onScroll } from 'react'
import './Browse.scss'
import Header from './Components/Header';
import LOTR from './Assets/tlotr.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCheck, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export default class Browse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            scrollPos: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll() {
        const { scrollPos } = this.state;
        this.setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: scrollPos > -10
        });
        console.log(this.state.show)
      }
    render() {

        const listMovies = [
            { id: 0, img: 'https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ9BPRr7TohPewyJYAgHg50FgdBPGSSj6ra9yE1KY_2nZp0VKhy5BtN8-i1XiqVdJzdNZwPFRYI8QCA0DMCE5h8iaDk.webp?r=f3b' },
            { id: 1, img: 'https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQDeTU9MGBBS5cDoAFfKy4BiM-BHE838paXaNrW6_YMIekSRFzslrWMz4FdDJtF5OFB1U2wAHs4iNWqxXUdd0VHiMDQ.webp?r=3fa' },
            { id: 2, img: 'https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQIRwSoU3O0KhYmTvtquLg2hmDmpIfrBr3FwzRXO2unZnWf-2vOXnThEhV9Qf9RnynFUGAanuQo90JO2jQbWurxE2Yqd.webp?r=a77' },
        ];
        var listMoviesRefer = listMovies.map((movie) => {

            return <li key={movie.id}>
                <a href="" className="movie-card">
                    <img src={movie.img} alt="" />
                </a>
            </li>;
        })

        return (
            <div className="browse-container"  >
                <Header index={false} scrollPosition={this.state.show}></Header>
                <div className="movie-container" >
                    <div className="movie-desc">
                        <div>
                            <figure className="movie-title" alt="" />

                            {/* <p className="movie-desc-time"><span className="movie-year">2003</span> <span className="movie-age">13+</span> <span className="movie-duration">3 h 20 min</span></p> */}
                            <div className="movie-desc-synop">
                                <p>
                                    Casi lo pierde todo, pero ahora ha surgido un nuevo mal. Con suerte le queda un poco de energía en el batitanque.
                                </p>
                            </div>
                            <div className="movie-buttons">
                                <a className="movie-play">
                                    <FontAwesomeIcon icon={faPlay} />
                                    <span> Reproducir</span>
                                </a>
                                <a href="" className="movie-info">
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span> Más información</span>
                                </a>
                                {/* <a href="" className="movie-like">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </a>
                                <a href="" className="movie-dislike">
                                    <FontAwesomeIcon icon={faThumbsDown} />
                                </a> */}
                            </div>
                            {/* <div className="movie-detail">
                                <span>
                                    <FontAwesomeIcon icon={faTrophy} />
                                </span>
                                <p>
                                    Peter Jackson cosechó 11 óscares, incluso a mejor película, por esta adaptación del clásico de J.R.R. Tolkien.
                                </p>
                            </div> */}
                            {/* <div className="movie-meta-info">
                                <p className="meta-info"><span className="label">Protagonistas:</span><span className="info">Elijah Wood, Ian McKellen, Liv Tyler</span></p>
                                <p className="meta-info"><span className="label">Géneros:</span><span className="info">Películas basadas en libros, Acción y aventuras, Aventuras</span></p>
                            </div> */}

                        </div>
                    </div>
                    <figure className="movie-img" alt="" />
                    {/* <div className="movie-option">
                        <ul>
                            <li><a href="">DESCRIPCIÓN GENERAL</a></li>
                            <li><a href="">MÁS SIMILARES</a></li>
                            <li><a href="">DETALLES</a></li>
                        </ul>
                    </div> */}
                </div>
                <div className="movie-list-refer">
                    <h5>Continuar viendo contenido</h5>
                    <ul>
                        {listMoviesRefer}

                    </ul>
                </div>
            </div>
        )
    }
}
