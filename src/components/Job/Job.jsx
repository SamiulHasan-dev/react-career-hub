import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, salary, location} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-4 py-2 font-extrabold border rounded border-[#7E90FE] mr-3 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-4 py-2 font-extrabold border rounded border-[#7E90FE] mr-3 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex">
                    <h2 className="flex gap-2 mr-4"><MdOutlineLocationOn className="text-xl"></MdOutlineLocationOn>{location}</h2>
                    <h2 className="flex gap-2"><AiOutlineDollarCircle className="text-xl"></AiOutlineDollarCircle>{salary}</h2>
                </div>
                <div className="card-actions "> 
                    <Link to={`/job/${id}`}><button className="btn btn-primary bg-gradient-to-r from-[#7E90FE]-400 to-[#7E90FE]-700 text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;