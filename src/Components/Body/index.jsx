import React, { Component } from 'react'
import './styles.scss';
import BoxProfile from '../BoxProfile/index';
import { Link } from 'react-router-dom';
import {NavLink} from "react-router-dom";
export default class index extends Component {

  render() {
    const profiles = [
      [{
        "id": 1,
        "name": "Sharron",
        "image": "https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABeIPIp9MHJXHwtapIl0XSlED0a6MxCxKo_SVx2CuWaTk3wxnCBlZblWaiB_8fbNsku7FidThgeteQWHojlEXi5UZ-GCo.png?r=8d1"
      }, {
        "id": 2,
        "name": "Karita",
        "image": "https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFA-JdmfXfrFtSb_lIY2uM-Prt9JL04Q7UI24MmLc_p6ypVKxA8rGLrtzmllVnOmE9EKt2AQsP39WtGetQmOSy7w9UQ.png?r=9fe"
      }, {
        "id": 3,
        "name": "Lynelle",
        "image": "https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFA8z4j-Che-sbka7zQ4FtlEBja-0ou29LnmPASSYSvBh9DK3WCzx_98x19Ok_ze25KEtoSEZsiO1j8WHJnqos7JtHg.png?r=e50"
      }, {
        "id": 4,
        "name": "Iona",
        "image": "https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFAR6OWAbAvcL_8bfhV1awbFLJvyVnbRfqVpTY50ysyfKHPFHeZmSPQ1xOYFQma8G9OdZMnD6RPI1H9sx73NcJUWhBQ.png?r=fcc"
      }], [{
        "id": 5,
        "name": "Shantee",
        "image": "https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFAxcJ30yqJYRJzb_N7h1b0Fjb_eTkApHB_vb1JRgbZIiA9Su3qEnNrX1KclUwZb_gVi3RNYdO9UOL8NlK38bOs1Gbw.png?r=3bb"
      }, {
        "id": 6,
        "name": "Adi",
        "image": "https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFCH0bTDiFyXZ7Qf4vs2rakWjRVD55n4mw-LE0xjAU9I09s9qk0K5behiMNz4Qc78lQmlYm8DnJFlLOPXFr4CI6bO3w.png?r=208"
      }, {
        "id": 7,
        "name": "Devonna",
        "image": "https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFCZYNsQau7nyArVVjBsKBhbvPBUhT6YLR5ZeWGOfIJcwPfX0OubVMO46bnu2kA3ajKbgXD3HlJmmyyrcya0u4meclA.png?r=094"
      }, {
        "id": 8,
        "name": "Aloisia",
        "image": "https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFCpXxg09sdlUlUsRFI8J09D_dXjNrX3TNyy8u-6ggPAEoVWp5HZo3RUuu0Wl3YLOULthkAxYw49wGnK12oU8sys_rA.png?r=47a"
      }], [{
        "id": 9,
        "name": "Theressa",
        "image": "https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFLnZCSArGpHLCeZF2525wT7UHzTS5CyduUxvNlgjKHtOy-4xvqMXvJhNOtFCR2KpZlXOQKtjENM4ThUX7uTnlh8ymA.png?r=8aa"
      }, {
        "id": 10,
        "name": "Sarene",
        "image": "https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFMGXnj8hdFnWJm2hbvtPAHO49eb7205vwPlBWddgH81CaLwGJ1ZZogYUH67W-Vxxj5Dh7ZIK9FiXew4qXUX-OuEoYQ.png?r=692"
      }, {
        "id": 11,
        "name": "Devonna",
        "image": "https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFCZYNsQau7nyArVVjBsKBhbvPBUhT6YLR5ZeWGOfIJcwPfX0OubVMO46bnu2kA3ajKbgXD3HlJmmyyrcya0u4meclA.png?r=094"
      }, {
        "id": 12,
        "name": "Aloisia",
        "image": "https://occ-0-333-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFCpXxg09sdlUlUsRFI8J09D_dXjNrX3TNyy8u-6ggPAEoVWp5HZo3RUuu0Wl3YLOULthkAxYw49wGnK12oU8sys_rA.png?r=47a"
      }]

    ];
    const randomArray = Math.floor(Math.random() * profiles.length)
    var profileList = profiles[randomArray].map((profile) => {

      return <li key={profile.id}> <Link to="/browse"> <BoxProfile name={profile.name} image={profile.image}></BoxProfile></Link></li>;
    })
    return (
      <div className="body-container">
        <div className="body-profile-container">
          <h1>¿Quién esta viendo ahora?</h1>
          <ul className="profiles-list">
            {profileList}
          </ul>
        </div>
      </div>
    )
  }
}
