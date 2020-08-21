export default function LeftNav({ data }) {
  return (
    <div className="row card-container">
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-8 col-md-6 col-lg-3 d-flex card-mob align-items-stretch"
          >
            <div className="cards">
              <div className="card-image-container">
                <img
                  src={item?.links?.mission_patch_small}
                  alt={item.mission_name}
                />
              </div>
              <div className="card-body">
                <div className="card-title h5">{item.mission_name}</div>
                <ul>
                  <p className="mission-id card-text">List Mission Ids: </p>
                  <li>
                    <p className="mission-id card-text">{item.mission_id}</p>
                  </li>
                </ul>
                <p className="mission-id card-text">
                  Launch Year: {item.launch_year}
                </p>
                <p className="mission-id card-text">
                  Successful Launch: {item.launch_success ? 'True' : 'Flase'}
                </p>
                <p className="mission-id card-text">
                  Successful Landing:
                  {item.launch_success?.rocket?.first_stage?.cores[0]
                    ?.land_success
                    ? 'True'
                    : 'False'}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
