
import { Link } from "react-router-dom";

const StaffList = [{
    id:1,
    name:"Staff1",
    start:"01/01/2022",
    end: "02/01/2022",
    manager: "Manager 1",
    role:"role",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."
},
{
    id:2,
    name:"Staff2",
    start:"01/01/2022",
    end: "02/01/2022",
    manager: "Manager 1",
    role:"role",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."
},
{
    id:3,
    name:"Staff3",
    start:"01/01/2022",
    end: "02/01/2022",
    manager: "Manager 1",
    role:"role",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."
},
{
    id:4,
    name:"Staff4",
    start:"01/01/2022",
    end: "02/01/2022",
    manager: "Manager 1",
    role:"role",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."
},
{
    id:5,
    name:"Staff5",
    start:"01/01/2022",
    end: "02/01/2022",
    manager: "Manager 1",
    role:"role",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."
},
]

type Staff = [{
    id:number,
    name:string,
    start:string,
    end: string,
    manager: string,
    role:string,
    description:string

}]

type StaffNAvListProps = {
  staff: Staff[];

}


const StaffNavList = ({staff}:StaffNAvListProps) =>{
    return(
        <div className="stafnav-list">
        {staff.map((name)=> (
            <Link to="/" key={name.id}
         ))} {/* this is to be updatedd with name and surname? */}

        </div>
    );
}

export default StaffNavList