import "./StaffInfo.scss";

const StaffInfo = () => {
    return (

        <div className="card-container">
            <div className="card-container__description">
            <h1 className="card-container__description--title">Employee Overview</h1>
            <h2 className="card-container__description--info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quasi reiciendis fugit, accusantium mollitia esse consectetur dolores illo nisi debitis magnam! Deleniti fugit fuga
                ipsa in praesentium modi, repellendus doloremque quos.</h2>
            </div>
            <div className="card-container__information">
                <h2 className="card-container__information--date">
                    Employee start Date:
                </h2>
                <h2 className="card-container__information--answer">
                    04/09/2020
                </h2>
                <h2 className="card-container__information--complete">
                    Course Completion:
                </h2>
                <h2 className="card-container__information--answer">
                    27/11/2020
                </h2>
                <h2 className="card-container__information--Manager">
                    Manager:
                </h2>
                <h2 className="card-container__information--answer">
                    Andy Evans
                </h2>

            </div>
        </div>
    )

}

export default StaffInfo;