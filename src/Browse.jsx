import React, { Component, onScroll, Fragment } from 'react'
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
        function createList(list){
            return list.map((movie) => {

                return <Fragment key={movie.id}>
                    <a href="" className="movie-card">
                        <img src={movie.img} alt="" />
                    </a>
                </Fragment>;
            })
        }

        const listMovies = [
            { id: 0, img: 'https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ9BPRr7TohPewyJYAgHg50FgdBPGSSj6ra9yE1KY_2nZp0VKhy5BtN8-i1XiqVdJzdNZwPFRYI8QCA0DMCE5h8iaDk.webp?r=f3b' },
            { id: 1, img: 'https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQDeTU9MGBBS5cDoAFfKy4BiM-BHE838paXaNrW6_YMIekSRFzslrWMz4FdDJtF5OFB1U2wAHs4iNWqxXUdd0VHiMDQ.webp?r=3fa' },
            { id: 2, img: 'https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQIRwSoU3O0KhYmTvtquLg2hmDmpIfrBr3FwzRXO2unZnWf-2vOXnThEhV9Qf9RnynFUGAanuQo90JO2jQbWurxE2Yqd.webp?r=a77' },
        ];
        const myList = [
            {id:0,img:'https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ6z2QUbNxwWXAI_0OCSm5TF_yj6_4leTHPHAeY8dT3cDd12ZFjWpogZOVpVE2QuVfxZsFEYoN53G4f_NmoiKx3C1fuExQ1eFSQJ8jBS3Xf64exZ39FYux0iGh7l.jpg?r=863'},
            {id:1,img:'https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQcSdh7Md-d1X6zNWppkgxZ0lPEAo6nwgrIHt0SR54ctY5A25tubEV3EzBtDrd8SJWupx_STPL98x6Td4oAfsY3lkICCSvqpnUVM-Rq0R1joz6iY-RdJ-ukBpMJU.jpg?r=00f'},
            {id:2,img:'https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQfSdn3pz5vYV9ozw7H5gbt-0GelPA5u5gVpfPca9pGWIkNBYa3rauIz-UbBnEbXwhZIxHlUj4A0lacJGqP8udRFIzE.jpg?r=367'},
            {id:2,img:'https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR_8O2Nv-AmvZx554nzIIRhyMRSahqalGRWtVJxAWJAPrCTWlIqdPoPX-YMZnwqV73nybHAzGCQNLF8lnR6Z-PW6IUw.jpg?r=8e7'},
            {id:2,img:'https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTF6rkAeeCTJhU0SWmqIbN84PT3KBEycukMSPP1AErW2G93dU75-ixzjvcnNDHkHckFOP0-hIMAUxFXbz6CXbNqWQuQ.jpg?r=d6b'},

        ]
        var listMoviesRefer = listMovies.map((movie) => {

            return <Fragment key={movie.id}>
                <a href="" className="movie-card">
                    <img src={movie.img} alt="" />
                </a>
            </Fragment>;
        })

        var listMyList = createList(myList);
      
        return (
            <div className="browse-container"  >
                <Header index={false} scrollPosition={this.state.show}></Header>
                <div className="movie-container" >
                    <div className="movie-desc">
                        <div>
                            <figure className="movie-title" alt="" />
                            <span className="movie-title-mobile"><p>Batman: El caballero de la noche asciende</p></span>
                            <p className="movie-desc-time"><span className="movie-year">2003</span> <span className="movie-age">13+</span> <span className="movie-duration">3 h 20 min</span></p>
                            <div className="movie-desc-synop">
                                <p>
                                    Casi lo pierde todo, pero ahora ha surgido un nuevo mal. Con suerte le queda un poco de energía en el batitanque.
                                </p>
                            </div>
                            <div className="movie-buttons">
                            <a className="movie-play-mobile">
                                    {/* <FontAwesomeIcon icon={faPlay} /> */}
                                    <span> REPRODUCIR</span>
                                </a>
                                <a className="movie-play">
                                    <FontAwesomeIcon icon={faPlay} />
                                    <span> Reproducir</span>
                                </a>
                                <a href="" className="movie-info">
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span> Más información</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <figure className="movie-img" alt="" />
                </div>
                <div className="movie-list-refer">
                    <p>Continuar viendo contenido de Mauricio</p>
                    <div className="listado">
                        {listMoviesRefer}

                    </div>
                </div>
                <div className="movie-list-refer">
                    <p>Mi lista</p>
                    <div className="listado">
                        {listMyList}

                    </div>
                </div>
            </div>
        )
    }
}
